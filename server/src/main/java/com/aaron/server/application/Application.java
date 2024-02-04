package com.aaron.server.application;

import com.aaron.server.student.Student;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.*;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Application {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(
            nullable = false
    )
    private String reason;
    @Column(
            nullable = false
    )
    private String description;
    @Column(
            nullable = false
    )
    private String document;

    @Enumerated(EnumType.STRING)
    @Column(
           nullable = false
    )
    private Status status;
    @Column(
            nullable = false
    )
    private Integer days;
    @Column(
            nullable = true
    )
    private Integer remarks;


    @ManyToOne
    @JoinColumn(name = "student_id")
    @JsonBackReference
    private Student student;

    public Application(String reason, String description, String document, Status status, Integer days, Student student) {
        this.reason = reason;
        this.description = description;
        this.document = document;
        this.status = status;
        this.days = days;
        this.student = student;
    }
}
