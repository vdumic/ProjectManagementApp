package com.application.server.user;

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
}
