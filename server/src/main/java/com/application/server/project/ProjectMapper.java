package com.application.server.project;

import com.application.server.user.User;
import org.springframework.stereotype.Service;

@Service
public class ProjectMapper {

    public Project toProject(ProjectDto projectDto) {
        if (projectDto == null) {
            throw new NullPointerException("The projectDto should not be null");
        }

        var project = new Project();
        project.setName(projectDto.name());
        project.setDescription(projectDto.description());
        project.setActive(true);

        User user = new User();
        user.setId(projectDto.createdBy());
        project.setUser(user);

        return project;
    }

    public ProjectsListDto toProjectsListDto(Project project) {
        return new ProjectsListDto(project.getName(), project.getId());
    }

    public ProjectResponseDto toProjectResponseDto(Project project) {
        return new ProjectResponseDto(project.getId(), project.getName(), project.getDescription(), project.getUser().getId(), project.getUser().getFirstname() + " " + project.getUser().getLastname(), project.getCreatedAt(), project.getUpdatedAt(), project.isActive());
    }
}
