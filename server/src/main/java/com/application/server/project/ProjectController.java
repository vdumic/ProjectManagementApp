package com.application.server.project;

import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@EnableJpaAuditing
@CrossOrigin
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/projects_names")
    public List<ProjectsListDto> getAllProjectsNames() {
        return projectService.getAllProjectsNames();
    }

    @GetMapping("/projects_created_by/{user-email}")
    public List<ProjectsListDto> getAllProjectsCretedByUser(@PathVariable("user-email") String userEmail) {
        return projectService.getAllProjectsCretedByUser(userEmail);
    }

    @GetMapping("/projects_from_others/{user-id}")
    public List<ProjectsListDto> getAllProjectsCreatedByOtherUsers(@PathVariable("user-id") UUID userId) {
        return projectService.getAllProjectsCretedByOtherUsers(userId);
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
