package com.application.server.task;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    public TaskService(TaskRepository taskRepository, TaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public TaskResponseDto getTaskById(UUID id) {
        Task task = taskRepository.findById(id).orElse(null);

        if (task == null) {
            return null;
        }
        return taskMapper.toTaskResponseDto(task);
    }

    public Task createTask(TaskDto taskDto) {
        Task taskInDb = taskRepository.findAll().stream().filter(t -> t.getName().equals(taskDto.name()) && t.getProject().getId().toString().equals(taskDto.projectId())).findAny().orElse(null);

        if (taskInDb != null) {
            return taskInDb;
        } else {
            var task = taskMapper.toTask(taskDto);
            return taskRepository.save(task);
        }
    }

    public String deleteTask(UUID taskId, UUID userId) {

        taskRepository.deleteById(taskId);
        return "Task successfully deleted!";
    }
}
