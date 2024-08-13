package com.application.server.on_project;

import com.application.server.project.Project;
import com.application.server.role.Role;
import com.application.server.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class OnProject {

    @EmbeddedId
    OnProjectId id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @ManyToOne
    @MapsId("projectId")
    @JoinColumn(name = "project_id")
    @JsonIgnore
    private Project project;

    @ManyToOne
    @JoinColumn(name = "role_id")
    @JsonIgnore
    private Role role;

    public OnProject() {
    }

    public OnProject(OnProjectId id, User user, Project project, Role role) {
        this.id = id;
        this.user = user;
        this.project = project;
        this.role = role;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public OnProjectId getId() {
        return id;
    }

    public void setId(OnProjectId id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "OnProject{" +
                "id=" + id +
                ", user=" + user +
                ", project=" + project +
                ", role=" + role +
                '}';
    }
}
