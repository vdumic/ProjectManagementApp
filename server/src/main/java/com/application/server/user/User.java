package com.application.server.user;

import com.application.server.on_project.OnProject;
import com.application.server.project.Project;
import com.application.server.task.Task;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @Column(name = "email")
    private String email;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "passkey_id")
    private String passkeyId;

    @Column(name = "login")
    private String login;

    @Column(name = "organization")
    private String organization;

    @Column(name = "job_title")
    private String jobTitle;

    @OneToMany(mappedBy = "createdByUser", cascade = CascadeType.ALL)
    private List<Task> createdTasks;

    @OneToMany(mappedBy = "assignedToUser", cascade = CascadeType.ALL)
    private List<Task> assignedTasks;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Project> projects;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<OnProject> onProjects;

    public User() {
    }

    public User(UUID id, String email, String firstname, String lastname, String username, String password, String passkeyId, String login, String organization, String jobTitle) {
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.passkeyId = passkeyId;
        this.login = login;
        this.organization = organization;
        this.jobTitle = jobTitle;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPasskeyId() {
        return passkeyId;
    }

    public void setPasskeyId(String passkeyId) {
        this.passkeyId = passkeyId;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public List<Task> getCreatedTasks() {
        return createdTasks;
    }

    public void setCreatedTasks(List<Task> createdTasks) {
        this.createdTasks = createdTasks;
    }

    public List<Task> getAssignedTasks() {
        return assignedTasks;
    }

    public void setAssignedTasks(List<Task> assignedTasks) {
        this.assignedTasks = assignedTasks;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public List<OnProject> getOnProjects() {
        return onProjects;
    }

    public void setOnProjects(List<OnProject> onProjects) {
        this.onProjects = onProjects;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", passkeyId='" + passkeyId + '\'' +
                ", login='" + login + '\'' +
                ", organization='" + organization + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", createdTasks=" + createdTasks +
                ", assignedTasks=" + assignedTasks +
                ", projects=" + projects +
                ", onProjects=" + onProjects +
                '}';
    }
}
