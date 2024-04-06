package com.application.server.project;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@EnableJpaAuditing
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/projects/{project-id}")
    public Project getProjectById(@PathVariable("project-id") UUID id) {
        return projectService.getProjectById(id);
    }

    @PostMapping("/projects")
    public Project createProject(@RequestBody ProjectDto projectDto) {
        return projectService.createProject(projectDto);
    }

    @DeleteMapping("/projects/{project-id}")
    public void deleteProject(@PathVariable("project-id") UUID id) {
        projectService.deleteProject(id);
    }
}
