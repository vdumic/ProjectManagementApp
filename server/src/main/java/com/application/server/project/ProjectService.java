package com.application.server.project;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    public ProjectService(ProjectRepository projectRepository, ProjectMapper projectMapper) {
        this.projectRepository = projectRepository;
        this.projectMapper = projectMapper;
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public List<ProjectsListDto> getAllProjectsNames() {
        return projectRepository.findAll().stream().map(projectMapper::toProjectsListDto).collect(Collectors.toList());
    }

    public List<ProjectsListDto> getAllProjectsCretedByUser(String userEmail) {
        var allProjects = projectRepository.findAll();
        return allProjects.stream().filter(project -> project.getUser().getEmail().equals(userEmail)).map(projectMapper::toProjectsListDto).collect(Collectors.toList());
    }

    public List<ProjectsListDto> getAllProjectsCretedByOtherUsers(UUID userId) {
        var projects = projectRepository.projectsFromOthers(userId);
        return projects.stream().map(projectMapper::toProjectsListDto).collect(Collectors.toList());
    }

    public Project getProjectById(UUID id) {
        return projectRepository.findById(id).orElse(null);
    }

    public Project createProject(ProjectDto projectDto) {
        var project = projectMapper.toProject(projectDto);
        return projectRepository.save(project);
    }

    public void deleteProject(UUID id) {
        projectRepository.deleteById(id);
    }
}
