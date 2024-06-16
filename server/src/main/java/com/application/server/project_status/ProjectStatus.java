package com.application.server.project_status;

import com.application.server.project.Project;
import com.application.server.status.Status;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class ProjectStatus {

    @EmbeddedId ProjectStatusId id;

    @ManyToOne
    @MapsId("projectId")
    @JoinColumn(name = "project_id")
    @JsonIgnore
    private Project project;

    @ManyToOne
    @MapsId("statusId")
    @JoinColumn(name = "status_id")
    @JsonIgnore
    private Status status;

    public ProjectStatus() {
    }

    public ProjectStatus(ProjectStatusId id, Project project, Status status) {
        this.id = id;
        this.project = project;
        this.status = status;
    }

    public ProjectStatusId getId() {
        return id;
    }

    public void setId(ProjectStatusId id) {
        this.id = id;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "ProjectStatus{" +
                "id=" + id +
                ", project=" + project +
                ", status=" + status +
                '}';
    }
}
