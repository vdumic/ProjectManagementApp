package com.application.server.project_status;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProjectStatusRepository extends JpaRepository<ProjectStatus, UUID> {

}
