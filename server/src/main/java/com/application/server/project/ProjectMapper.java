package com.application.server.project;

import org.springframework.stereotype.Service;

@Service
public class ProjectMapper {

    public Project toProject(ProjectDto projectDto) {
        if(projectDto == null) {
            throw new NullPointerException("The projectDto should not be null");
        }

        var project = new Project();
        project.setName(projectDto.name());
        project.setDescription(projectDto.description());

        return project;
    }
}
