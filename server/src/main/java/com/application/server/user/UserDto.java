package com.application.server.user;


import java.util.UUID;

public record UserDto(
        UUID id,
        String email,
        String firstName,
        String lastName,
        String login,
        String token,
        String passkeyId) {
}
