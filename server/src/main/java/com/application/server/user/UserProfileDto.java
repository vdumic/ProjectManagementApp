package com.application.server.user;

import java.util.UUID;

public record UserProfileDto(
        UUID id,
        String firstname,
        String lastname,
        String username,
        String organization,
        String jobtitle
) {
}
