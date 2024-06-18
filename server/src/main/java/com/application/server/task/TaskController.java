package com.application.server.task;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/tasks/{task-id}")
    public TaskResponseDto getTaskById(@PathVariable("task-id") UUID id) {
        return taskService.getTaskById(id);
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody TaskDto taskDto) {
        return taskService.createTask(taskDto);
    }

    @DeleteMapping("/tasks/{task-id}/{user-id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteTask(@PathVariable("task-id") UUID taskId, @PathVariable("user-id") UUID userId) {
        return taskService.deleteTask(taskId, userId);
    }
}
