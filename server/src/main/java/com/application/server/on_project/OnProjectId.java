package com.application.server.on_project;

import jakarta.persistence.Column;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

public class OnProjectId implements Serializable {

    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "project_id")
    private UUID projectId;

    public OnProjectId(UUID userId, UUID projectId) {
        this.userId = userId;
        this.projectId = projectId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OnProjectId that = (OnProjectId) o;
        return Objects.equals(userId, that.userId) && Objects.equals(projectId, that.projectId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, projectId);
    }
}
