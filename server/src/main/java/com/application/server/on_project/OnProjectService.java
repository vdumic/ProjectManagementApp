package com.application.server.on_project;

import com.application.server.project.Project;
import com.application.server.project.ProjectRepository;
import com.application.server.project.ProjectService;
import com.application.server.role.Role;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OnProjectService {

    private final OnProjectRepository onProjectRepository;
    private final OnProjectMapper onProjectMapper;
    private final ProjectRepository projectRepository;

    public OnProjectService(OnProjectRepository onProjectRepository, OnProjectMapper onProjectMapper, ProjectRepository projectRepository) {
        this.onProjectRepository = onProjectRepository;
        this.onProjectMapper = onProjectMapper;
        this.projectRepository = projectRepository;
    }

    public List<OnProject> getAllOnProject() {
        return onProjectRepository.findAll();
    }

    public OnProjectResponseDto createOnProject(OnProjectDto onProjectDto) {

        OnProject onProjectInDb = onProjectRepository.findAll().stream().filter(op -> op.getUser().getId().equals(onProjectDto.userId()) && op.getProject().getId().equals(onProjectDto.projectId())).findAny().orElse(null);

        if (onProjectInDb != null) {
            return onProjectMapper.toOnProjectResponseDto(onProjectInDb);
        } else {
            var onProject = onProjectMapper.toOnProject(onProjectDto);
            return onProjectMapper.toOnProjectResponseDto(onProjectRepository.save(onProject));
        }
    }

    public OnProjectResponseDto updateUserRoleOnProject(OnProjectDto onProjectDto) {
        var onProject = onProjectMapper.toOnProject(onProjectDto);
        var role = new Role();

        Project project = projectRepository.findAll().stream().filter(p -> p.getId().equals(onProject.getProject().getId())).findAny().orElse(null);
        if (project.getUser().getId().equals(onProject.getUser().getId())) {
            return onProjectMapper.toOnProjectResponseDto(onProject);
        } else {
            role.setId(onProject.getRole().getId());
            onProject.setRole(role);
            return onProjectMapper.toOnProjectResponseDto(onProjectRepository.save(onProject));
        }
    }

    public String deleteUserFromProject(UUID projectId, UUID userId) {
        OnProject onProject = onProjectRepository.findAll().stream().filter(op -> op.getProject().getId().equals(projectId) && op.getUser().getId().equals(userId)).findAny().orElse(null);

        if (onProject == null) {
            return "Wrong combination of project and user id";
        } else if (userId.equals(onProject.getProject().getUser().getId())) {
            return "Project creator cannot be removed from project!";
        }

        onProjectRepository.delete(onProject);
        return "User successfully deleted from project!";
    }

    public void deleteAllUsersOnProject(UUID projectId) {
        List<OnProject> onProjectList = onProjectRepository.findAll().stream().filter(op -> op.getProject().getId().equals(projectId)).collect(Collectors.toList());

        for (OnProject onProject : onProjectList) {
            onProjectRepository.delete(onProject);
        }
    }

    public List<OnProject> getAllUserProjects(UUID userId) {
        return onProjectRepository.findAll().stream().filter(op -> op.getUser().getId().equals(userId)).collect(Collectors.toList());
    }
}
