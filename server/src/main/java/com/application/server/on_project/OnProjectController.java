package com.application.server.on_project;

import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
