package com.aaron.server.auth;

import com.aaron.server.config.JwtService;
import com.aaron.server.errorHandler.ErrorException;
import com.aaron.server.user.Role;
import com.aaron.server.user.User;
import com.aaron.server.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final PasswordEncoder passwordEncoder;
    private  final UserRepository userRepository;
    private  final JwtService jwtService;
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterationRequest request
    ) throws ErrorException {

        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/register/admin")
    public ResponseEntity<AuthenticationReponseAdmin> registerAdmin(
            @RequestBody RegisterationRequest request
    ){

        return ResponseEntity.ok(authenticationService.registerAdmin(request));
    }

    @PostMapping("/login")
    public ResponseEntity<HashMap<String,String>> authenticate(
            @RequestBody AuthenticationRequest request
    ) throws  ErrorException{
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
