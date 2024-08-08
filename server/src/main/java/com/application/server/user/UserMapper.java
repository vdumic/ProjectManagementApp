package com.application.server.user;

import com.application.server.role.Role;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {

    public UsersListDto toUserListDto(User user) {

        return new UsersListDto(user.getId(), user.getEmail(), user.getFirstname(), user.getLastname(), null);
    }

    public UserIdDto toUserIdDto(User user) {
        return new UserIdDto(user.getId());
    }

    public UserDto toUserDto(User user) {
        return new UserDto(user.getId(),
                user.getEmail(),
                user.getFirstname(),
                user.getLastname(),
                user.getLogin(),
                null,
                user.getPasskeyId());
    }

    public UserProfileDto toUserProfileDto(User user) {
        return new UserProfileDto(user.getId(),
                user.getFirstname(),
                user.getLastname(),
                user.getUsername(),
                user.getOrganization(),
                user.getJobTitle());
    }

    @Mapping(target = "password", ignore = true)
    public User signUpToUser(SignUpDto userDto) {
        return new User(null,
                userDto.email(),
                userDto.firstname(),
                userDto.lastname(),
                userDto.username(),
                userDto.password().toString(),
                "passkey",
                userDto.login(),
                userDto.organization(),
                userDto.jobtitle());
    }
}
