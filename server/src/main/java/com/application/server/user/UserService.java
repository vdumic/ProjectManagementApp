package com.application.server.user;

import com.application.server.on_project.OnProject;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(UUID id) {
        return userRepository.findById(id).orElse(null);
    }

    public boolean getUserByEmail(String email) {
        return !userRepository.findAll().stream().filter(user -> user.getEmail().equals(email)).collect(Collectors.toList()).isEmpty();
    }

    public UserIdDto getUserIdByEmail(String email) {
        User user = userRepository.findAll().stream().filter(u -> u.getEmail().equals(email)).findAny().orElse(null);
        return userMapper.toUserIdDto(user);
    }

    public List<UsersListDto> getAllUsersOnProject(UUID projectId) {
        var users = userRepository.usersOnProject(projectId);
        return users.stream().map(userMapper::toUserListDto).collect(Collectors.toList());
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }

    public String getUserRole(UUID userId, UUID projectId) {
        User user = userRepository.findById(userId).orElse(null);

        OnProject onProject = user.getOnProjects().stream().filter(op -> op.getProject().getId().equals(projectId)).findAny().orElse(null);
        return onProject.getRole().getName();
    }

    public String getUserEmail(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        return user.getEmail();
    }

    public String getUserFirstname(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        return user.getFirstname();
    }

    public String getUserLastname(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        return user.getLastname();
    }

    public String getUsername(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        return user.getUsername();
    }

    public String getUserOrganization(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        return user.getOrganization();
    }

    public String getUserJobtitle(UUID userId) {
        User user = userRepository.findById(userId).orElse(null);
        return user.getJobTitle();
    }
}
