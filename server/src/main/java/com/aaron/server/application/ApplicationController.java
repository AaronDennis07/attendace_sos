package com.aaron.server.application;
import com.aaron.server.errorHandler.ErrorException;
import com.aaron.server.student.Student;
import com.aaron.server.student.StudentRepository;
import lombok.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

class UpdateRequest{
    private Integer days;
    private String reason;
    private  String description;
    private String document;

}

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
class requestStatus{
    private Status status;
}
@RestController
@RequestMapping("/api/v1/applications")
@RequiredArgsConstructor
public class ApplicationController {
    private final StudentRepository studentRepository;
    private final ApplicationRepository applicationRepository;
    
    @PostMapping("/")
    public ResponseEntity<String> newApplication(
            @RequestBody ApplicationRequest request
    ) throws ErrorException{
        System.out.println(request);
        SecurityContext context = SecurityContextHolder.getContext();
        String authentication = context.getAuthentication().getName();
        System.out.println(authentication);
        Student student = studentRepository.findByEmail(authentication).orElseThrow(()->new ErrorException("Student not found"));
        Application app = new Application(request.getReason(), request.getDescription(), request.getDocument(), Status.PENDING,request.getDays(),student);

        applicationRepository.save(app);
        return ResponseEntity.ok("Application Successfully Submitted");
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> editApplication(
            @PathVariable Integer id,
            @RequestBody UpdateRequest request
    ) throws ErrorException{
        Application application = applicationRepository.findById(id).orElseThrow(()->new ErrorException("Application not found"));
        application.setDays(request.getDays());
        application.setDescription(request.getDescription());
        application.setReason(request.getReason());
        application.setDocument(request.getDocument());
        return ResponseEntity.ok("Application Updated Successfully ");
    }

    @GetMapping("/")
    public ResponseEntity<List<Application>> getAllApllications(){

        return ResponseEntity.ok(applicationRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Application> getApllication(@PathVariable Integer id) throws ErrorException{
        System.out.println(id);
        Application application = applicationRepository.findById(id).orElseThrow(()->
                new ErrorException("application does not exist")
        );
        System.out.println(application);
       return ResponseEntity.ok(application);
    }


    @GetMapping("/student")
    public ResponseEntity<List<Application>> getApllicationsByStudent() throws  ErrorException{
        SecurityContext context = SecurityContextHolder.getContext();
        String authentication = context.getAuthentication().getName();
        Student student = studentRepository.findByEmail(authentication).orElseThrow(()->new ErrorException("Student not found"));
        System.out.println(student);
        System.out.println(applicationRepository.findAllByStudentEmail(student.getEmail()).stream().toList());
        return ResponseEntity.ok(student.getApplications());
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<List<Application>> updateApplicationStatus(@PathVariable Integer id,@RequestBody requestStatus status) throws ErrorException{
        Application application = applicationRepository.findById(id).orElseThrow(()->new ErrorException("Application not found"));
        application.setStatus(status.getStatus());
        applicationRepository.save(application);
        return ResponseEntity.ok(applicationRepository.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Application>> deleteApplication(@PathVariable Integer id){
        System.out.println(id);
        applicationRepository.deleteById(id);

        return ResponseEntity.ok(applicationRepository.findAll());
    }
}
