package com.application.server.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProjectRepository extends JpaRepository<Project, UUID> {

    @Query(value = "SELECT * FROM project " +
            "JOIN on_project ON project.id = on_project.project_id " +
            "WHERE on_project.user_id = :userId",
            nativeQuery = true)
    List<Project> projectsFromOthers(@Param("userId") UUID userId);
}
