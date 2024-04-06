package com.application.server.user;

import jakarta.validation.constraints.NotEmpty;

public record UserDto(
        @NotEmpty(message = "Email should not be empty")
        String email,
        @NotEmpty(message = "Password should not be empty")
        String password,
        @NotEmpty(message = "Name should not be empty")
        String fullName,
        String publicName,
        String jobTitle
) {
}
