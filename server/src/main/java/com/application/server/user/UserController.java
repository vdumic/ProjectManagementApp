package com.application.server.user;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users_to_add/{project-id}")
    public List<User> getUsersToAdd(@PathVariable("project-id") UUID projectId) {
        return userService.getUsersToAdd(projectId);
    }

    @GetMapping("/users_on_project/{project-id}")
    public List<UsersListDto> getAllUsersOnProject(@PathVariable("project-id") UUID projectId) {
        return userService.getAllUsersOnProject(projectId);
    }

    @GetMapping("/users/profile/{user-id}")
    public UserProfileDto getUserProfile(@PathVariable("user-id") UUID userId) {
        return userService.getUserProfile(userId);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/users/profile")
    public UserProfileDto updateUserProfile(@RequestBody UserProfileDto userProfileDto) {
        return userService.updateUserProfile(userProfileDto);
    }

    @DeleteMapping("/users/{user-id}")
    public void deleteUser(@PathVariable("user-id") UUID id) {
        userService.deleteUser(id);
    }
}
