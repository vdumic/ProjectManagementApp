package com.application.server.task;

import com.application.server.priority.Priority;
import com.application.server.project.Project;
import com.application.server.status.Status;
import com.application.server.user.User;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class TaskMapper {

    public Task toTask(TaskDto taskDto) {
        if (taskDto == null) {
            throw new NullPointerException("The taskDto should not be null");
        }
        var task = new Task();
        task.setName(taskDto.name());
        task.setDescription(taskDto.description());
        task.setStoryPoints(taskDto.storyPoints());

        Project project = new Project();
        project.setId(UUID.fromString(taskDto.projectId()));
        task.setProject(project);

        Status status = new Status();
        status.setId(UUID.fromString(taskDto.statusId()));
        task.setStatus(status);

        Priority priority = new Priority();
        priority.setId(UUID.fromString(taskDto.priorityId()));
        task.setPriority(priority);

        User user = new User();
        user.setId(UUID.fromString(taskDto.createdBy()));
        task.setCreatedByUser(user);

        return task;
    }

    public TaskResponseDto toTaskResponseDto(Task task) {
        User assignedTo = task.getAssignedToUser();
        if (assignedTo == null) {
            return new TaskResponseDto(task.getId(), task.getName(), task.getCreatedByUser().getId(), task.getCreatedByUser().getFirstname() + " " + task.getCreatedByUser().getLastname(), null, null, task.getDescription(), task.getStoryPoints(), task.getProject().getId(), task.getProject().getName(), task.getPriority().getId(), task.getPriority().getName(), task.getStatus().getId(), task.getStatus().getName(), task.getCreatedAt(), task.getUpdatedAt(), task.getStartDate(), task.getEndDate());
        }
        return new TaskResponseDto(task.getId(), task.getName(), task.getCreatedByUser().getId(), task.getCreatedByUser().getFirstname() + " " + task.getCreatedByUser().getLastname(), task.getAssignedToUser().getId(), task.getAssignedToUser().getFirstname() + " " + task.getAssignedToUser().getLastname(), task.getDescription(), task.getStoryPoints(), task.getProject().getId(), task.getProject().getName(), task.getPriority().getId(), task.getPriority().getName(), task.getStatus().getId(), task.getStatus().getName(), task.getCreatedAt(), task.getUpdatedAt(), task.getStartDate(), task.getEndDate());
    }
}
