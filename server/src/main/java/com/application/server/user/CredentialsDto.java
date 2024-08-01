package com.application.server.user;

public record CredentialsDto(
        String email,
        char[] password
) {
}
