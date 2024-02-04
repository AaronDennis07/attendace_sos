package com.aaron.server.student;

import com.aaron.server.application.Application;
import com.aaron.server.errorHandler.ErrorException;
import lombok.*;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@RestController
@RequestMapping("/api/v1/students")
@RequiredArgsConstructor
public class StudentController {
    private final StudentRepository repository;
    @PostMapping("/")
    public ResponseEntity<HashMap<String,String>> addStudent(
            @RequestBody StudentRequest request
    ){
        System.out.println(request);
        Student student = new Student(request.getUSN(),request.getDepartment(),request.getSection(),request.getSemester(), request.getName(), request.getEmail());
        student.setApplications(new ArrayList<>());
        repository.save(student);
        HashMap<String,String> response = new HashMap<>();
        response.put("message","student added successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/")
    public ResponseEntity<List<Student>> findAllStudents(){

        return ResponseEntity.ok(repository.findAll());
    }
    @GetMapping("/details/{id}")
    public ResponseEntity<Student> getoneStudent(@PathVariable Integer id){

        return ResponseEntity.ok(repository.findById(id).orElseThrow());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> getStudent(@PathVariable Integer id){
        repository.deleteById(id);
        return ResponseEntity.ok("Deleted");
    }
    @PostMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Integer id,@RequestBody StudentRequest request){
        Student student = repository.findById(id).orElseThrow();
        student.setName(request.getName());
        student.setSection(request.getSection());
        student.setUsn(request.getUSN());
        student.setEmail(request.getEmail());
        student.setSemester(request.getSemester());
        student.setDepartment(request.getDepartment());
        repository.save(student);
        return ResponseEntity.ok(student);
    }


    @GetMapping("/user")
    public ResponseEntity<Student> findAuth() throws  ErrorException{
        SecurityContext context = SecurityContextHolder.getContext();
        String authentication = context.getAuthentication().getName();
        Student student = repository.findByEmail(authentication).orElseThrow(()->new ErrorException(" "));
        return ResponseEntity.ok(student);
    }
 @GetMapping("/applications")
    public ResponseEntity<List<Application>> findAllApplications() throws ErrorException {
        SecurityContext context = SecurityContextHolder.getContext();
        String authentication = context.getAuthentication().getName();
        Student student = repository.findByEmail(authentication).orElseThrow(()->new ErrorException(" "));
        return ResponseEntity.ok(student.getApplications());
    }

    @GetMapping("/{email}")
    public Student getStudentDetails(@PathVariable String email){
        return repository.findByEmail(email).orElseThrow();
    }

}
