package com.application.server.project;

import com.application.server.on_project.OnProject;
import com.application.server.on_project.OnProjectDto;
import com.application.server.on_project.OnProjectService;
import com.application.server.project_status.ProjectStatus;
import com.application.server.project_status.ProjectStatusService;
import com.application.server.role.RoleService;
import com.application.server.task.Task;
import com.application.server.task.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;
    private final RoleService roleService;
    private final OnProjectService onProjectService;
    private final TaskService taskService;
    private final ProjectStatusService projectStatusService;


    public ProjectService(ProjectRepository projectRepository, ProjectMapper projectMapper, RoleService roleService, OnProjectService onProjectService, TaskService taskService, ProjectStatusService projectStatusService) {
        this.projectRepository = projectRepository;
        this.projectMapper = projectMapper;
        this.roleService = roleService;
        this.onProjectService = onProjectService;
        this.taskService = taskService;
        this.projectStatusService = projectStatusService;
    }

    public List<ProjectResponseDto> getAllProjects() {
        return projectRepository.findAll().stream().map(projectMapper::toProjectResponseDto).collect(Collectors.toList());
    }

    public List<ProjectsListDto> getAllProjectsNames() {
        return projectRepository.findAll().stream().map(projectMapper::toProjectsListDto).collect(Collectors.toList());
    }

    public List<ProjectResponseDto> getAllProjectsCreatedByUser(String userEmail) {
        var allProjects = projectRepository.findAll();
        return allProjects.stream().filter(project -> project.getUser().getEmail().equals(userEmail)).map(projectMapper::toProjectResponseDto).collect(Collectors.toList());
    }

    public List<ProjectResponseDto> getAllProjectsCreatedByOtherUsers(UUID userId) {
        var projects = projectRepository.projectsFromOthers(userId);
        return projects.stream().map(projectMapper::toProjectResponseDto).collect(Collectors.toList());
    }

    public Project getProjectById(UUID id) {
        return projectRepository.findById(id).orElse(null);
    }

    public Project createProject(ProjectDto projectDto) {
        Project projectInDb = projectRepository.findAll().stream().filter(p -> p.getName().equals(projectDto.name()) && p.getUser().getId().toString().equals(projectDto.createdBy())).findAny().orElse(null);

        if (projectInDb != null) {
            return projectInDb;
        } else {
            Project project = projectRepository.save(projectMapper.toProject(projectDto));
            OnProjectDto onProjectDto = new OnProjectDto(projectDto.createdBy(), project.getId().toString(), roleService.getRoleIdByName("admin").toString());
            onProjectService.createOnProject(onProjectDto);
            projectStatusService.addPredefinedStatusesOnProject(project.getId());
            return project;
        }
    }

    public ProjectResponseDto updateProject(ProjectUpdateDto projectUpdateDto) {
        Project project = projectRepository.findById(projectUpdateDto.projectId()).orElse(null);

        if (project != null) {
            OnProject onProject = project.getOnProjects().stream().filter(op -> op.getUser().getId().equals(projectUpdateDto.userId())).findAny().orElse(null);

            if (onProject.getRole().getName().equals("admin")) {
                String newName = projectUpdateDto.name() != null ? projectUpdateDto.name() : project.getName();
                String newDescription = projectUpdateDto.description() != null ? projectUpdateDto.description() : project.getDescription();
                project.setName(newName);
                project.setDescription(newDescription);

                return projectMapper.toProjectResponseDto(projectRepository.save(project));
            } else {
                return projectMapper.toProjectResponseDto(project);
            }
        } else {
            return null;
        }
    }

    public ProjectResponseDto deactivateProject(UUID projectId, UUID userId) {
        Project project = projectRepository.findById(projectId).orElse(null);

        if (project != null && project.getUser().getId().equals(userId)) {
            project.setActive(false);
        }
        return projectMapper.toProjectResponseDto(project);
    }

    public ProjectResponseDto activateProject(UUID projectId, UUID userId) {
        Project project = projectRepository.findById(projectId).orElse(null);

        if (project != null && project.getUser().getId().equals(userId)) {
            project.setActive(true);
        }
        return projectMapper.toProjectResponseDto(project);
    }

    public String deleteProject(UUID projectId, UUID userId) {
        Project project = projectRepository.findById(projectId).orElse(null);

        if (project == null) {
            return "Project with defined ID does not exist!";
        } else if (project.getUser().getId().equals(userId)) {
            onProjectService.deleteAllUsersOnProject(projectId);
            projectStatusService.deleteAllStatusesOnProject(projectId);
            taskService.deleteAllTasksOnProject(projectId);
            projectRepository.deleteById(projectId);
            return "Project is successfully deleted!";
        } else {
            return "Project can be deleted only by its creator!";
        }
    }
}
