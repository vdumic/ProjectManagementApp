package com.application.server.config;

import com.application.server.user.*;
import org.mapstruct.control.MappingControl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.UUID;

@RestController
public class AuthController {

    private final UserService userService;
    private final UserAuthProvider userAuthProvider;

    public AuthController(UserService userService, UserAuthProvider userAuthProvider) {
        this.userService = userService;
        this.userAuthProvider = userAuthProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) {
        UserDto user = userService.login(credentialsDto);

        UserDto tokenUser = new UserDto(user.id(), user.email(), user.firstName(), user.lastName(), user.login(), userAuthProvider.createToken(user.email()), user.passkeyId());

        return ResponseEntity.ok(tokenUser);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signUpDto) {
        UserDto user = userService.register(signUpDto);
        String token = userAuthProvider.createToken(user.email());

        UserDto tokenUser = new UserDto(user.id(), user.email(), user.firstName(), user.lastName(), user.login(), token, user.passkeyId());

        return ResponseEntity.created(URI.create("/users/" + tokenUser.id())).body(tokenUser);
    }

    @GetMapping("/signed_user/{token}")
    public UserDto getSignedUser(@PathVariable String token) {
        return userAuthProvider.retrieveUserFromToken(token);
    }

    @GetMapping("/validation/{token}")
    public boolean checkIsTokenValid(@PathVariable String token) {
        return userAuthProvider.checkIsTokenValid(token);
    }
}
