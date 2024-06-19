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
    public List<TaskResponseDto> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/tasks/{task-id}")
    public TaskResponseDto getTaskById(@PathVariable("task-id") UUID id) {
        return taskService.getTaskById(id);
    }

    @GetMapping("/tasks/project/{project-id}")
    public List<TaskResponseDto> getTasksOnProject(@PathVariable("project-id") UUID projectId) {
        return taskService.getTasksOnProject(projectId);
    }

    @GetMapping("/tasks/status/{project-id}/{status-id}")
    public List<TaskResponseDto> getTasksOnProjectWithStatus(@PathVariable("project-id") UUID projectId, @PathVariable("status-id") UUID statusId) {
        return taskService.getTasksOnProjectWithStatus(projectId, statusId);
    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody TaskDto taskDto) {
        return taskService.createTask(taskDto);
    }

    @PutMapping("/tasks")
    public TaskResponseDto updateTask(@RequestBody TaskUpdateDto taskUpdateDto) {
        return taskService.updateTask(taskUpdateDto);
    }

    @PutMapping("/tasks/status")
    public TaskResponseDto updateTaskStatus(@RequestBody TaskUpdateStatusDto taskUpdateStatusDto) {
        return taskService.updateTaskStatus(taskUpdateStatusDto);
    }

    @PutMapping("/tasks/priority")
    public TaskResponseDto updateTaskPriority(@RequestBody TaskUpdatePriorityDto taskUpdatePriorityDto) {
        return taskService.updateTaskPriority(taskUpdatePriorityDto);
    }

    @DeleteMapping("/tasks/{task-id}/{user-id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteTask(@PathVariable("task-id") UUID taskId, @PathVariable("user-id") UUID userId) {
        return taskService.deleteTask(taskId, userId);
    }
}
