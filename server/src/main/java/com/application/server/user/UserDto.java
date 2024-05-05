package com.application.server.user;

import jakarta.validation.constraints.NotEmpty;

public record UserDto(
        @NotEmpty(message = "Email should not be empty")
        String email,
        @NotEmpty(message = "Firstname should not be empty")
        String firstname,
        @NotEmpty(message = "Lastname should not be empty")
        String lastname,
        @NotEmpty(message = "Username should not be empty")
        String username,
        String organization,
        String jobTitle
) {
}
