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

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users_to_add/{project-id}")
    public List<User> getUsersToAdd(@PathVariable("project-id") UUID projectId) {
        return userService.getUsersToAdd(projectId);
    }

    @GetMapping("/users/{user-id}")
    public User getUserById(@PathVariable("user-id") UUID id) {
        return userService.getUserById(id);
    }

    @GetMapping("/users/exist/{email}")
    public boolean getUserByEmail(@PathVariable("email") String email) {
        return userService.getUserByEmail(email);
    }

    @GetMapping("/users/id/{email}")
    public UserIdDto getUserIdByEmail(@PathVariable("email") String email) {
        return userService.getUserIdByEmail(email);
    }

    @GetMapping("/users_on_project/{project-id}")
    public List<UsersListDto> getAllUsersOnProject(@PathVariable("project-id") UUID projectId) {
        return userService.getAllUsersOnProject(projectId);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @DeleteMapping("/users/{user-id}")
    public void deleteUser(@PathVariable("user-id") UUID id) {
        userService.deleteUser(id);
    }
}
