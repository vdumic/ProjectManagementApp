package com.application.server.on_project;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OnProjectRepository extends JpaRepository<OnProject, UUID> {

}
