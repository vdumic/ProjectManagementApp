package com.application.server.user;

import com.application.server.on_project.OnProject;
import com.application.server.task.Task;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "public_name")
    private String publicName;

    @Column(name = "job_title")
    private String jobTitle;

    @OneToMany(mappedBy = "user")
    private List<Task> tasks;

    @OneToMany(mappedBy = "user")
    private List<OnProject> onProjects;

    public User() {
    }

    public User(String email, String password, String fullName, String publicName, String jobTitle, List<Task> tasks, List<OnProject> onProjects) {
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.publicName = publicName;
        this.jobTitle = jobTitle;
        this.tasks = tasks;
        this.onProjects = onProjects;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPublicName() {
        return publicName;
    }

    public void setPublicName(String publicName) {
        this.publicName = publicName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
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
                ", password='" + password + '\'' +
                ", fullName='" + fullName + '\'' +
                ", publicName='" + publicName + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", tasks=" + tasks +
                ", onProjects=" + onProjects +
                '}';
    }
}
