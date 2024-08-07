package com.application.server.project_status;

import com.application.server.status.Status;
import com.application.server.status.StatusService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProjectStatusService {

    private final ProjectStatusRepository projectStatusRepository;
    private final ProjectStatusMapper projectStatusMapper;

    private final StatusService statusService;

    List<String> predefinedStatuses = Arrays.asList("In backlog", "In progress", "Done");

    public ProjectStatusService(ProjectStatusRepository projectStatusRepository, ProjectStatusMapper projectStatusMapper, StatusService statusService) {
        this.projectStatusRepository = projectStatusRepository;
        this.projectStatusMapper = projectStatusMapper;
        this.statusService = statusService;
    }

    public List<ProjectStatusResponseDto> getAllProjectStatuses() {
        return projectStatusRepository.findAll().stream().map(projectStatusMapper::toProjectStatusDto).collect(Collectors.toList());
    }

    public List<StatusesOnProjectResponseDto> getAllStatusesOnProject(UUID projectId) {
        List statusesOnProject = new ArrayList<StatusesOnProjectResponseDto>();
        List<ProjectStatus> projects = projectStatusRepository.findAll().stream().filter(ps -> ps.getProject().getId().equals(projectId)).collect(Collectors.toList());

        for (ProjectStatus ps : projects) {
            statusesOnProject.add(projectStatusMapper.toStatusesOnProjectDto(ps));
        }

        return statusesOnProject;
    }

    public ProjectStatusResponseDto createProjectStatus(ProjectStatusDto projectStatusDto) {
        ProjectStatus projectStatusInDb = projectStatusRepository.findAll().stream().filter(ps -> ps.getProject().getId().equals(projectStatusDto.projectId()) && ps.getStatus().getId().equals(projectStatusDto.statusId())).findAny().orElse(null);

        if (projectStatusInDb != null) {
            return projectStatusMapper.toProjectStatusDto(projectStatusInDb);
        } else {
            var projectStatus = projectStatusMapper.toProjectStatus(projectStatusDto);
            return projectStatusMapper.toProjectStatusDto(projectStatusRepository.save(projectStatus));
        }
    }

    public ProjectStatusResponseDto createNewProjectStatus(ProjectStatusNameDto projectStatusNameDto) {
        Status status = statusService.createStatus(new Status(projectStatusNameDto.statusName()));
        return createProjectStatus(new ProjectStatusDto(projectStatusNameDto.projectId(), status.getId()));
    }

    public String deleteProjectStatus(UUID projectId, UUID statusId) {
        var projectStatus = projectStatusRepository.findAll().stream().filter(ps -> ps.getProject().getId().equals(projectId) && ps.getStatus().getId().equals(statusId)).findAny().orElse(null);

        if (projectStatus == null) {
            return "Status is not on project";
        } else if (predefinedStatuses.contains(projectStatus.getStatus().getName())) {
            return "Predefined statuses cannot be deleted!";
        }

        projectStatusRepository.delete(projectStatus);
        return "Successfully deleted";
    }

    public void addPredefinedStatusesOnProject(UUID projectId) {
        for (String status : predefinedStatuses) {
            UUID statusId = statusService.getStatusId(status);
            createProjectStatus(new ProjectStatusDto(projectId, statusId));
        }
    }

    public void deleteAllStatusesOnProject(UUID projectId) {
        List<ProjectStatus> projectStatuses = projectStatusRepository.findAll().stream().filter(ps -> ps.getProject().getId().equals(projectId)).collect(Collectors.toList());
        for (ProjectStatus projectStatus : projectStatuses) {
            projectStatusRepository.delete(projectStatus);
        }
    }
}
