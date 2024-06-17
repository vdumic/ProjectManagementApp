package com.application.server.project_status;

import com.application.server.status.Status;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class ProjectStatusController {

    private final ProjectStatusService projectStatusService;

    public ProjectStatusController(ProjectStatusService projectStatusService) {
        this.projectStatusService = projectStatusService;
    }

    @GetMapping("/project_statuses")
    public List<ProjectStatusResponseDto> getAllProjectStatuses() {
        return projectStatusService.getAllProjectStatuses();
    }

    @GetMapping("/project_statuses/{project-id}")
    public List<StatusesOnProjectResponseDto> getAllStatusesOnProject(@PathVariable("project-id") UUID projectId) {
        return projectStatusService.getAllStatusesOnProject(projectId);
    }

    @PostMapping("/project_statuses")
    public ProjectStatusResponseDto createProjectStatus(@RequestBody ProjectStatusDto projectStatusDto) {
        return projectStatusService.createProjectStatus(projectStatusDto);
    }

    @DeleteMapping("/project_statuses/{project-id}/{status-id}")
    public String deleteProjectStatus(@PathVariable("project-id") UUID projectId, @PathVariable("status-id") UUID statusId) {
        return projectStatusService.deleteProjectStatus(projectId, statusId);
    }

}
