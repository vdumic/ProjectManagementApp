package com.application.server.on_project;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "on_project")
@IdClass(OnProjectId.class)
public class OnProject {

    @Id
    @Column(name = "user_id")
    private UUID userId;

    @Id
    @Column(name = "project_id")
    private UUID projectId;

    @Column(name = "role_id")
    private UUID roleId;

    public OnProject() {
    }

    public OnProject(UUID userId, UUID projectId, UUID roleId) {
        this.userId = userId;
        this.projectId = projectId;
        this.roleId = roleId;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public UUID getProjectId() {
        return projectId;
    }

    public void setProjectId(UUID projectId) {
        this.projectId = projectId;
    }

    public UUID getRoleId() {
        return roleId;
    }

    public void setRoleId(UUID roleId) {
        this.roleId = roleId;
    }

    @Override
    public String toString() {
        return "OnProject{" +
                "userId=" + userId +
                ", projectId=" + projectId +
                ", roleId=" + roleId +
                '}';
    }
}
