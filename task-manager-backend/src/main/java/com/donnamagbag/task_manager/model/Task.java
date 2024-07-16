package com.donnamagbag.task_manager.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

// Entity class represents a table in the database
// @Entity: an annotation that specifies the class is a JPA entity and is mapped to a database table
// @ID: an annotation that specifies the primary key of an entity
// @GeneratedValue: an annotation used to specify the generation strategy for the primary key
// @Column: an annotation used to specify the details of the column to which a field will be mapped
// Getters and Setters: Provide methods to access and modify the private fields
// public: an access modifier that allows a class, method, or variable to be accessed from any other class
// private: an access modifier that restricts access to the class, method, or variable only within the class it is declared
// class: a blueprint for creating objects; defines fields (attributes) and methods (functions) that describe the behavior of objects
// long: a data type used to store 64-bit signed integers
// String: A data type in Java used to store a sequence of characters (text)
// primary key: a unique identifier for a record in a database table; each table can have only one primary key
// Java Persistence API (JPA): specification for object-relational mapping in Java

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private LocalDate dueDate;

    // Getters
    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    //Setters

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
         this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

        public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }
}
