package com.application.server.project_status;

import com.application.server.project.Project;
import com.application.server.status.Status;
import org.springframework.stereotype.Service;

@Service
public class ProjectStatusMapper {
    public ProjectStatus toProjectStatus(ProjectStatusDto projectStatusDto) {
        if (projectStatusDto == null) {
            throw new NullPointerException("The projectStatusDto should not be null");
        }
        var projectStatus = new ProjectStatus();
        ProjectStatusId projectStatusId = new ProjectStatusId(projectStatusDto.projectId(), projectStatusDto.statusId());
        projectStatus.setId(projectStatusId);

        Project project = new Project();
        project.setId(projectStatusDto.projectId());
        projectStatus.setProject(project);

        Status status = new Status();
        status.setId(projectStatusDto.statusId());
        projectStatus.setStatus(status);

        return projectStatus;
    }

    public ProjectStatusResponseDto toProjectStatusDto(ProjectStatus projectStatus) {
        return new ProjectStatusResponseDto(projectStatus.getProject().getId(), projectStatus.getProject().getName(), projectStatus.getStatus().getId(), projectStatus.getStatus().getName());
    }

    public StatusesOnProjectResponseDto toStatusesOnProjectDto(ProjectStatus projectStatus) {
        return new StatusesOnProjectResponseDto(projectStatus.getStatus().getName(), projectStatus.getStatus().getId());
    }
}
