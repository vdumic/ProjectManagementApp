package com.application.server.project;

import com.application.server.on_project.OnProjectDto;
import com.application.server.on_project.OnProjectService;
import com.application.server.role.RoleService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;
    private final RoleService roleService;
    private final OnProjectService onProjectService;

    public ProjectService(ProjectRepository projectRepository, ProjectMapper projectMapper, RoleService roleService, OnProjectService onProjectService) {
        this.projectRepository = projectRepository;
        this.projectMapper = projectMapper;
        this.roleService = roleService;
        this.onProjectService = onProjectService;
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
        Project projectInDb = projectRepository.findAll().stream().filter(p -> p.getName().equals(projectDto.name()) && p.getUser().getId().toString().equals(projectDto.createdBy())).findAny().orElse(null);

        if (projectInDb != null) {
            return projectInDb;
        } else {
            Project project = projectRepository.save(projectMapper.toProject(projectDto));
            OnProjectDto onProjectDto = new OnProjectDto(projectDto.createdBy(), project.getId().toString(), roleService.getRoleIdByName("admin").toString());
            onProjectService.createOnProject(onProjectDto);

            return project;
        }
    }

    public String deleteProject(UUID projectId, UUID userId) {
        Project project = projectRepository.findById(projectId).orElse(null);

        if (project == null) {
            return "Project with defined ID does not exist!";
        } else if (project.getUser().getId().equals(userId)) {
            projectRepository.deleteById(projectId);
            return "Project is successfully deleted!";
        } else {
            return "Project can be deleted only by its creator!";
        }
    }
}
