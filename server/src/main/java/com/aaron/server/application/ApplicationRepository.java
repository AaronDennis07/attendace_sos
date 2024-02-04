package com.aaron.server.application;


import com.aaron.server.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application,Integer> {

    public List<Application> findAllByStudentEmail(String email);
}
