package com.application.server.task;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
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
    public Task getTaskById(@PathVariable("task-id") UUID id) {
        return taskService.getTaskById(id);
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody TaskDto taskDto) {
        System.out.println(taskDto.name());
        return taskService.createTask(taskDto);
    }

    @DeleteMapping("/tasks/{task-id}")
    public void deleteTask(@PathVariable("task-id") UUID id) {
        taskService.deleteTask(id);
    }
}
