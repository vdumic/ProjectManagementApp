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
    public List<ProjectResponseDto> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/projects_names")
    public List<ProjectsListDto> getAllProjectsNames() {
        return projectService.getAllProjectsNames();
    }

    @GetMapping("/projects_from_others/{user-id}")
    public List<ProjectResponseDto> getAllProjectsCreatedByOtherUsers(@PathVariable("user-id") UUID userId) {
        return projectService.getAllProjectsCreatedByOtherUsers(userId);
    }

    @GetMapping("/projects/{project-id}")
    public Project getProjectById(@PathVariable("project-id") UUID id) {
        return projectService.getProjectById(id);
    }

    @GetMapping("/projects/active/{user-id}")
    public List<ProjectResponseDto> getActiveProjects(@PathVariable("user-id") UUID userId) {
        return projectService.getActiveProjects(userId);
    }

    @GetMapping("/projects/unactive/{user-id}")
    public List<ProjectResponseDto> getUnactiveProjects(@PathVariable("user-id") UUID userId) {
        return projectService.getUnactiveProjects(userId);
    }

    @PostMapping("/projects")
    public Project createProject(@RequestBody ProjectDto projectDto) {
        return projectService.createProject(projectDto);
    }

    @PutMapping("/projects")
    public ProjectResponseDto updateProject(@RequestBody ProjectUpdateDto projectUpdateDto) {
        return projectService.updateProject(projectUpdateDto);
    }

    @PutMapping("/projects/name")
    public ProjectResponseDto updateProjectName(@RequestBody ProjectUpdateDto projectUpdateDto) {
        return projectService.updateProjectName(projectUpdateDto);
    }

    @PutMapping("/projects/description")
    public ProjectResponseDto updateProjectDescription(@RequestBody ProjectUpdateDto projectUpdateDto) {
        return projectService.updateProjectDescription(projectUpdateDto);
    }

    @PutMapping("/projects/deactivate/{project-id}/{user-id}")
    public ProjectResponseDto deactivateProject(@PathVariable("project-id") UUID projectId, @PathVariable("user-id") UUID userId) {
        return projectService.deactivateProject(projectId, userId);
    }

    @PutMapping("/projects/activate/{project-id}/{user-id}")
    public ProjectResponseDto activateProject(@PathVariable("project-id") UUID projectId, @PathVariable("user-id") UUID userId) {
        return projectService.activateProject(projectId, userId);
    }

    @DeleteMapping("/projects/{project-id}/{user-id}")
    public String deleteProject(@PathVariable("project-id") UUID projectId, @PathVariable("user-id") UUID userId) {
        return projectService.deleteProject(projectId, userId);
    }
}
