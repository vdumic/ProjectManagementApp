package com.application.server.on_project;

import com.application.server.project.Project;
import com.application.server.role.Role;
import com.application.server.user.User;
import org.springframework.stereotype.Service;

@Service
public class OnProjectMapper {

    public OnProject toOnProject(OnProjectDto onProjectDto) {
        if (onProjectDto == null) {
            throw new NullPointerException("The onProjectDto should not be null");
        }
        var onProject = new OnProject();
        OnProjectId onProjectId = new OnProjectId(onProjectDto.userId(), onProjectDto.projectId());
        onProject.setId(onProjectId);

        Project project = new Project();
        project.setId(onProjectDto.projectId());
        onProject.setProject(project);

        User user = new User();
        user.setId(onProjectDto.userId());
        onProject.setUser(user);

        Role role = new Role();
        role.setId(onProjectDto.roleId());
        onProject.setRole(role);

        return onProject;
    }

    public OnProjectResponseDto toOnProjectResponseDto(OnProject onProject) {
        return new OnProjectResponseDto(onProject.getProject().getId(), onProject.getProject().getName(), onProject.getUser().getId(), onProject.getUser().getFirstname() + " " + onProject.getUser().getLastname(), onProject.getRole().getId(), onProject.getRole().getName());
    }
}
