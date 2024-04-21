package com.application.server.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    @Query(value = "SELECT \"user\".* FROM \"user\" " +
            "JOIN on_project ON \"user\".id = on_project.user_id " +
            "JOIN project ON on_project.project_id = project.id " +
            "WHERE project.id = :projectId",
            nativeQuery = true)
    List<User> usersOnProject(@Param("projectId") UUID projectId);
}
