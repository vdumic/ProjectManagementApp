package com.application.server.user;

import com.application.server.exceptions.AppException;
import com.application.server.on_project.OnProject;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
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

    public UserDto findByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        return userMapper.toUserDto(user);
    }

    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByEmail(credentialsDto.email())
                .orElseThrow(() -> new AppException("Unknown user! Please register in the application!", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()), user.getPassword())) {
            return userMapper.toUserDto(user);
        }

        throw new AppException("Invalid password!", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto) {
        Optional<User> optionalUser = userRepository.findByEmail(userDto.email());

        if (optionalUser.isPresent()) {
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        User user = userMapper.signUpToUser(userDto);

        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.password())));

        User savedUser = userRepository.save(user);

        return userMapper.toUserDto(user);
    }
}
