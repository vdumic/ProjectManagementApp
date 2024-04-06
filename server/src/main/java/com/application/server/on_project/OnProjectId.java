package com.application.server.on_project;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

public class OnProjectId implements Serializable {

    private UUID userId;

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
