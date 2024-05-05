package com.application.server.on_project;

import com.application.server.project.Project;
import com.application.server.role.Role;
import com.application.server.user.User;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class OnProjectMapper {

    public OnProject toOnProject(OnProjectDto onProjectDto) {
        if (onProjectDto == null) {
            throw new NullPointerException("The onProjectDto should not be null");
        }
        var onProject = new OnProject();
        OnProjectId onProjectId = new OnProjectId(UUID.fromString(onProjectDto.userId()), UUID.fromString(onProjectDto.projectId()));
        onProject.setId(onProjectId);

        Project project = new Project();
        project.setId(UUID.fromString(onProjectDto.projectId()));
        onProject.setProject(project);

        User user = new User();
        user.setId(UUID.fromString(onProjectDto.userId()));
        onProject.setUser(user);

        Role role = new Role();
        role.setId(UUID.fromString(onProjectDto.roleId()));
        onProject.setRole(role);

        return onProject;
    }

    public OnProjectResponseDto toOnProjectResponseDto(OnProject onProject) {
        return new OnProjectResponseDto(onProject.getProject().getName(), onProject.getUser().getUsername(), onProject.getRole().getName());
    }
}
