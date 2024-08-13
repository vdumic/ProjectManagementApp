package com.application.server.config;

import com.application.server.exceptions.AppException;
import com.application.server.user.UserDto;
import com.application.server.user.UserService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Collections;
import java.util.Date;

@Component
public class UserAuthProvider {

    private final UserService userService;
    @Value("${security.jwt.token.secret-key:secret.value}")
    private String secretKey;

    public UserAuthProvider(UserService userService) {
        this.userService = userService;
    }

    @PostConstruct
    protected void init() {
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(String email) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + 7200000);

        return JWT.create()
                .withIssuer(email)
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .sign(Algorithm.HMAC256(secretKey));
    }

    public Authentication validateToken(String token) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secretKey)).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        String email = decodedJWT.getIssuer();
        UserDto user = userService.findByEmail(email);

        if (user != null) {
            return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
        } else {
            throw new AppException("User not found!", HttpStatus.NOT_FOUND);
        }
    }

    public UserDto retrieveUserFromToken(String token) {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secretKey)).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        String email = decodedJWT.getIssuer();
        UserDto user = userService.findByEmail(email);

        return user;
    }

    public boolean checkIsTokenValid(String token) {
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secretKey)).build();
            DecodedJWT decodedJWT = verifier.verify(token);
            String email = decodedJWT.getIssuer();
            UserDto user = userService.findByEmail(email);

            if (user != null) {
                SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList()));
                return true;
            } else {
                throw new AppException("User not found!", HttpStatus.NOT_FOUND);
            }
        } catch (TokenExpiredException e) {
            System.out.println("Token has expired");
            return false;
        } catch (JWTVerificationException e) {
            System.out.println("Invalid token");
            return false;
        }
    }
}
