package com.application.server.project_status;

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

    public ProjectStatusService(ProjectStatusRepository projectStatusRepository, ProjectStatusMapper projectStatusMapper) {
        this.projectStatusRepository = projectStatusRepository;
        this.projectStatusMapper = projectStatusMapper;
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

    public String deleteProjectStatus(UUID projectId, UUID statusId) {
        List<String> predefinedStatuses = Arrays.asList("In backlog", "In progress", "Done");
        var projectStatus = projectStatusRepository.findAll().stream().filter(ps -> ps.getProject().getId().equals(projectId) && ps.getStatus().getId().equals(statusId)).findAny().orElse(null);

        if (projectStatus == null) {
            return "Status is not on project";
        } else if (predefinedStatuses.contains(projectStatus.getStatus().getName())) {
            return "Predefined statuses cannot be deleted!";
        }

        projectStatusRepository.delete(projectStatus);
        return "Successfully deleted";
    }
}
