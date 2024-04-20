package com.application.server.on_project;

import com.application.server.project.Project;
import com.application.server.role.Role;
import com.application.server.user.User;
import jakarta.persistence.*;

@Entity
/*@Table(name = "on_project")
@IdClass(OnProjectId.class)*/
public class OnProject {

/*
    @Id
    private UUID userId;

    @Id
    private UUID projectId;
*/
    @EmbeddedId OnProjectId id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("projectId")
    @JoinColumn(name = "project_id")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    public OnProject() {
    }

    public OnProject(OnProjectId id, User user, Project project, Role role) {
        this.id = id;
        this.user = user;
        this.project = project;
        this.role = role;
    }

/*    public UUID getUserId() {
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
    }*/

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
