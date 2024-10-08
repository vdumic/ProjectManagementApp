package com.application.server.project_status;

import org.springframework.http.HttpStatus;
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

    @GetMapping("/project_statuses/{project-id}")
    public List<StatusesOnProjectResponseDto> getAllStatusesOnProject(@PathVariable("project-id") UUID projectId) {
        return projectStatusService.getAllStatusesOnProject(projectId);
    }

    @GetMapping("/project_statuses/to_delete/{project-id}")
    public List<StatusesOnProjectResponseDto> getStatusesOnProjectToDelete(@PathVariable("project-id") UUID projectId) {
        return projectStatusService.getStatusesOnProjectToDelete(projectId);
    }

    @PostMapping("/project_statuses/new_status")
    public ProjectStatusResponseDto createNewProjectStatus(@RequestBody ProjectStatusNameDto projectStatusNameDto) {
        return projectStatusService.createNewProjectStatus(projectStatusNameDto);
    }

    @PutMapping("/project_statuses/reorder")
    public List<ProjectStatusResponseDto> reorderStatusesOnProject(@RequestBody ProjectStatusOrderDto projectStatusOrderDto) {
        return projectStatusService.reorderStatusesOnProject(projectStatusOrderDto);
    }

    @DeleteMapping("/project_statuses/{project-id}/{status-id}")
    @ResponseStatus(HttpStatus.OK)
    public String deleteProjectStatus(@PathVariable("project-id") UUID projectId, @PathVariable("status-id") UUID statusId) {
        return projectStatusService.deleteProjectStatus(projectId, statusId);
    }

}
