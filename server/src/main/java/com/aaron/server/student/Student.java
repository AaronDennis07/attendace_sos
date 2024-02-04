package com.aaron.server.student;

import com.aaron.server.application.Application;
import com.aaron.server.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Student {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(
            nullable = false
    )
    private String usn;
    @Column(
            nullable = false
    )
    private String department;
    @Column(
            nullable = false
    )
    private String section;
    @Column(
            nullable = false
    )
    private Integer semester;
    @Column(
            nullable = false
    )
    private String name;
    @Column(
            nullable = false
    )
    private String email;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "id"
    )
    private User user;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "student",cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Application> applications ;

    public Student(String USN, String department, String section, Integer semester, String name, String email) {
        this.usn = USN;
        this.department = department;
        this.section = section;
        this.semester = semester;
        this.name = name;
        this.email = email;

    }

}
