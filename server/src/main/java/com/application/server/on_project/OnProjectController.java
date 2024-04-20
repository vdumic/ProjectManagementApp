package com.application.server.on_project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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
}
