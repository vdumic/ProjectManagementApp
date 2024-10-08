package com.application.server.task;

import com.application.server.on_project.OnProject;
import com.application.server.priority.Priority;
import com.application.server.priority.PriorityService;
import com.application.server.project.Project;
import com.application.server.status.Status;
import com.application.server.status.StatusService;
import com.application.server.user.User;
import com.application.server.user.UserService;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;
    private final StatusService statusService;
    private final PriorityService priorityService;
    private final UserService userService;

    public TaskService(TaskRepository taskRepository, TaskMapper taskMapper, StatusService statusService, PriorityService priorityService, UserService userService) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
        this.statusService = statusService;
        this.priorityService = priorityService;
        this.userService = userService;
    }

    public List<TaskResponseDto> getAllTasks() {
        return taskRepository.findAll().stream().map(taskMapper::toTaskResponseDto).collect(Collectors.toList());
    }

    public List<TaskResponseDto> getTasksOnProjectWithStatus(UUID projectId, UUID statusId) {
        List<Task> tasksOnProjectWithStatus = taskRepository.findAll().stream()
                .filter(t -> t.getProject().getId().equals(projectId) && t.getStatus().getId().equals(statusId))
                .sorted(Comparator.comparing(Task::getUpdatedAt).reversed())
                .collect(Collectors.toList());

        return tasksOnProjectWithStatus.stream().map(taskMapper::toTaskResponseDto).collect(Collectors.toList());
    }

    public Task createTask(TaskDto taskDto) {
        Task taskInDb = taskRepository.findAll().stream().filter(t -> t.getName().equals(taskDto.name()) && t.getProject().getId().toString().equals(taskDto.projectId())).findAny().orElse(null);

        if (taskInDb != null) {
            return taskInDb;
        } else {
            var task = taskMapper.toTask(taskDto);
            Status status = statusService.getStatusById(taskDto.statusId());
            if (!status.getName().equalsIgnoreCase("in backlog")) {
                task.setStartDate(new Date());
            } if (status.getName().equalsIgnoreCase("done")) {
                task.setStartDate(new Date());
                task.setEndDate(new Date());
            }
            return taskRepository.save(task);
        }
    }

    public TaskResponseDto updateTask(TaskUpdateDto taskUpdateDto) {
        Task task = taskRepository.findById(taskUpdateDto.taskId()).orElse(null);

        if (task != null) {
            String newName = taskUpdateDto.taskName() != null ? taskUpdateDto.taskName() : task.getName();
            String newDescription = taskUpdateDto.description() != null ? taskUpdateDto.description() : task.getDescription();
            Integer newStoryPoints = taskUpdateDto.storyPoints() != null ? taskUpdateDto.storyPoints() : task.getStoryPoints();

            task.setName(newName);
            task.setDescription(newDescription);
            task.setStoryPoints(newStoryPoints);

            taskRepository.save(task);

            return taskMapper.toTaskResponseDto(task);
        } else {
            return null;
        }
    }

    public TaskResponseDto updateTaskStatus(TaskUpdateStatusDto taskUpdateStatusDto) {
        Task task = taskRepository.findById(taskUpdateStatusDto.taskId()).orElse(null);
        Status oldStatus = task.getStatus();

        if (task != null) {
            Status newStatus = new Status();
            newStatus.setId(taskUpdateStatusDto.statusId());
            newStatus.setName(statusService.getStatusName(taskUpdateStatusDto.statusId()));
            task.setStatus(newStatus);

            if (oldStatus.getName().equals("Done")) {
                return null;
            } else if (newStatus.getName().equals("Done")) {
                task.setEndDate(new Date());
            } else if (oldStatus.getName().equals("In backlog")) {
                task.setStartDate(new Date());
            }

            taskRepository.save(task);

            return taskMapper.toTaskResponseDto(task);
        } else {
            return null;
        }
    }

    public TaskResponseDto updateTaskPriority(TaskUpdatePriorityDto taskUpdatePriorityDto) {
        Task task = taskRepository.findById(taskUpdatePriorityDto.taskId()).orElse(null);
        String userRole = userService.getUserRole(taskUpdatePriorityDto.userId(), task.getProject().getId());

        if (task != null && userRole.equals("admin")) {
            Priority newPriority = new Priority();
            newPriority.setId(taskUpdatePriorityDto.priorityId());
            newPriority.setName(priorityService.getPriorityName(taskUpdatePriorityDto.priorityId()));
            task.setPriority(newPriority);

            return taskMapper.toTaskResponseDto(taskRepository.save(task));
        } else {
            return null;
        }
    }

    public TaskResponseDto updateTaskAssignee(TaskUpdateAsigneeDto taskUpdateAsigneeDto) {
        Task task = taskRepository.findById(taskUpdateAsigneeDto.taskId()).orElse(null);

        if (task != null) {
            if (task.getCreatedByUser().getId().equals(taskUpdateAsigneeDto.userId())) {
                task.setAssignedToUser(task.getCreatedByUser());
            } else {
                User user = new User();
                user.setId(taskUpdateAsigneeDto.userId());
                user.setEmail(userService.getUserEmail(taskUpdateAsigneeDto.userId()));
                user.setFirstname(userService.getUserFirstname(taskUpdateAsigneeDto.userId()));
                user.setLastname(userService.getUserLastname(taskUpdateAsigneeDto.userId()));
                user.setPassword(userService.getUserPassword(taskUpdateAsigneeDto.userId()));
                user.setPasskeyId(userService.getUserPasskeyId(taskUpdateAsigneeDto.userId()));
                user.setLogin(userService.getUserLogin(taskUpdateAsigneeDto.userId()));
                user.setUsername(userService.getUsername(taskUpdateAsigneeDto.userId()));
                user.setOrganization(userService.getUserOrganization(taskUpdateAsigneeDto.userId()));
                user.setJobTitle(userService.getUserJobtitle(taskUpdateAsigneeDto.userId()));

                task.setAssignedToUser(user);
            }

            return taskMapper.toTaskResponseDto(taskRepository.save(task));
        } else {
            return null;
        }
    }

    public String deleteTask(UUID taskId, UUID userId) {
        Task task = taskRepository.findById(taskId).orElse(null);

        if (task == null) {
            return "Task with defined ID does not exist!";
        } else {
            Project project = task.getProject();
            OnProject onProject = project.getOnProjects().stream().filter(op -> op.getUser().getId().equals(userId)).findAny().orElse(null);

            if (onProject.getRole().getName().equals("admin")) {
                taskRepository.deleteById(taskId);
                return "Task successfully deleted!";
            } else {
                return "Task can be deleted only by admin";
            }
        }
    }

    public void deleteAllTasksOnProject(UUID projectId) {
        List<Task> tasks = taskRepository.findAll().stream().filter(t -> t.getProject().getId().equals(projectId)).collect(Collectors.toList());
        for (Task task : tasks) {
            taskRepository.delete(task);
        }
    }
}
