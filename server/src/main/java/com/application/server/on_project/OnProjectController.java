package com.application.server.on_project;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class OnProjectController {

    private final OnProjectService onProjectService;

    public OnProjectController(OnProjectService onProjectService) {
        this.onProjectService = onProjectService;
    }

    @GetMapping("/on_projects")
    public List<OnProjectResponseDto> getAllOnProjects() {
        return onProjectService.getAllOnProject();
    }

    @PostMapping("/on_projects")
    public OnProjectResponseDto createOnProject(@RequestBody OnProjectDto onProjectDto) {
        return onProjectService.createOnProject(onProjectDto);
    }

    @PutMapping("/on_projects")
    public OnProjectResponseDto updateUserRoleOnProject(@RequestBody OnProjectDto onProjectDto) {
        return onProjectService.updateUserRoleOnProject(onProjectDto);
    }

    @DeleteMapping("/on_projects/{project-id}/{user-id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteUserFromProject(@PathVariable("project-id") UUID projectId, @PathVariable("user-id") UUID userId) {
        return onProjectService.deleteUserFromProject(projectId, userId);
    }
}
