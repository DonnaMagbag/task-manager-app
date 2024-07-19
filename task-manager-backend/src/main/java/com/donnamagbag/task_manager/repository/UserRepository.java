package com.donnamagbag.task_manager.repository;

import com.donnamagbag.task_manager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
