package com.donnamagbag.task_manager.repository;

import com.donnamagbag.task_manager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository; //provides JPA-specific CRUD operations
import org.springframework.stereotype.Repository;

@Repository // annotation that indicates that the class is a repository and is a candidate for Spring's component scannting to detect and regiester beans.
public interface TaskRepository extends JpaRepository<Task, Long> { // <Task entity, primary key type>
}
