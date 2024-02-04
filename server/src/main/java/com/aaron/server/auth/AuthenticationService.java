package com.aaron.server.auth;

import com.aaron.server.config.JwtService;
import com.aaron.server.errorHandler.ErrorException;
import com.aaron.server.student.Student;
import com.aaron.server.student.StudentRepository;
import com.aaron.server.user.Role;
import com.aaron.server.user.User;
import com.aaron.server.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final StudentRepository studentRepository;

    private final PasswordEncoder passwordEncoder;
    private  final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterationRequest request) throws ErrorException{
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        Student student = studentRepository.findByEmail(request.getEmail())
                        .orElseThrow(()->new ErrorException("student does not exist"));
        System.out.println(student);
        student.setUser(user);
        repository.save(user);
        studentRepository.save(student);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .student(student)
                .build();
    }

    public AuthenticationReponseAdmin registerAdmin(RegisterationRequest request) {
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ADMIN)
                .build();


        repository.save(user);

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationReponseAdmin.builder()
                .token(jwtToken)
                .build();
    }

    public  HashMap<String,String> authenticate(AuthenticationRequest request) throws ErrorException{
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user =  repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        HashMap<String,String> response = new HashMap<>();
        if(user.getRole()==Role.USER){
           Student student =  studentRepository.findByEmail(request.getEmail()).orElseThrow(()->new ErrorException("Invalid Credentials"));
            response.put("username",student.getName());
        }
        response.put("role",user.getRole().toString());
        response.put("token",jwtToken);
        
        return response;
    }
}
