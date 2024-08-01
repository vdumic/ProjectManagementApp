package com.application.server.user;

import jakarta.validation.constraints.NotEmpty;

public record SignUpDto(

        @NotEmpty
        String firstname,

        @NotEmpty
        String lastname,

        @NotEmpty
        String username,

        @NotEmpty
        String email,

        @NotEmpty
        String login,

        @NotEmpty
        char[] password,

        String organization,

        String jobtitle
) {
}
