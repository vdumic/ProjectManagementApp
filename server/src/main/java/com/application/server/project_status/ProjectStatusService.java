package com.application.server.project_status;

import org.springframework.stereotype.Service;

@Service
public class ProjectStatusService {

    private final ProjectStatusRepository projectStatusRepository;

    public ProjectStatusService(ProjectStatusRepository projectStatusRepository) {
        this.projectStatusRepository = projectStatusRepository;
    }
}
