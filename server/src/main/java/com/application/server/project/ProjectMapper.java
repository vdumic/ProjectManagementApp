package com.application.server.project;

import com.application.server.user.User;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ProjectMapper {

    public Project toProject(ProjectDto projectDto) {
        if(projectDto == null) {
            throw new NullPointerException("The projectDto should not be null");
        }

        var project = new Project();
        project.setName(projectDto.name());
        project.setDescription(projectDto.description());

        User user = new User();
        user.setId(UUID.fromString(projectDto.createdBy()));
        project.setUser(user);

        return project;
    }

    public ProjectsListDto toProjectsListDto(Project project) {
        return new ProjectsListDto(project.getName(), project.getId());
    }
}
