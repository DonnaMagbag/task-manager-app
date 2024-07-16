package com.donnamagbag.task_manager.service;

import com.donnamagbag.task_manager.model.Task;
import com.donnamagbag.task_manager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//server class contains business logic and acts as an intermediary between te controller and the repository;
// typically contains methods to perform operations on the data

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}