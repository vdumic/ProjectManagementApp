package com.application.server.project_status;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.util.Objects;
import java.util.UUID;

@Embeddable
public class ProjectStatusId {

    @Column(name = "project_id")
    private UUID projectId;

    @Column(name = "status_id")
    private UUID statusId;

    public ProjectStatusId() {
    }

    public ProjectStatusId(UUID projectId, UUID statusId) {
        this.projectId = projectId;
        this.statusId = statusId;
    }

    public UUID getProjectId() {
        return projectId;
    }

    public void setProjectId(UUID projectId) {
        this.projectId = projectId;
    }

    public UUID getStatusId() {
        return statusId;
    }

    public void setStatusId(UUID statusId) {
        this.statusId = statusId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjectStatusId that = (ProjectStatusId) o;
        return Objects.equals(getProjectId(), that.getProjectId()) && Objects.equals(getStatusId(), that.getStatusId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProjectId(), getStatusId());
    }
}
