package com.application.server.user;

import org.springframework.stereotype.Service;

@Service
public class UserMapper {

    public UsersListDto toUserListDto(User user) {
        return new UsersListDto(user.getFirstname(), user.getLastname());
    }
}
