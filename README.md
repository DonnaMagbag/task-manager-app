# Task Manager App

## Project Overview
The Task Manager App is a full-stack web application designed to help users manage their tasks efficiently. It includes functionalities for user authentication (login and registration) and task management. The frontend is built with React, while the backend is developed using Spring Boot. The application leverages RESTful APIs for communication between the frontend and backend, and H2 in-memory database for data storage during development.

This simple web application was developed as a component that could be included in the development of other projects. Styling is simplified for the purposes of demonstration and can be modified to match the target project styling.

## Key Features
- **User Registration and Login**: Allows users to register and log in to the application.
- **Task Management**: Users can create, view, edit, and delete tasks.
- **Single Page Application (SPA)**: Implemented using React Router to handle client-side routing.
- **Secure Password Handling**: Utilizes BCrypt for hashing passwords before storing them in the database.

## Technologies Used
- **Frontend**: React, React Router, CSS
- **Backend**: Spring Boot, Spring Security, JPA (Java Persistence API)
- **Database**: H2 (In-memory database)
- **Tools**: Postman (for API testing), IntelliJ IDEA, Git, GitHub

## Setup and Installation

### Prerequisites
- Node.js and npm
- Java Development Kit (JDK)
- IntelliJ IDEA or any other preferred IDE

### Backend Setup
1. **Clone the repository**:
   git clone https://github.com/DonnaMagbag/task-manager-app.git
   cd task-manager-app
2. **Navigate to the backend directory**:
    cd task-manager-backend
3. **Build the project and run it**:
    ./mvnw clean install
    ./mvnw spring-boot:run
4. **The backend server will start on 'http://localhost:8080'.**

### Frontend Setup
1. **Navigate to the frontend directory**:
    cd task-manager-frontend
2. **Install the dependencies**:
    npm install
3. **Start the React application**:
    npm start
4. **The backend server will start on 'http://localhost:3080'.**

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login an existing user

### Tasks
- **GET /api/tasks**: Retrieve all tasks
- **POST /api/tasks**: Create a new task
- **PUT /api/tasks/{id}**: Update an existing task
- **DELETE /api/tasks/{id}**: Delete a task

## Issues and Solutions

### CORS Policy Issues
- **Issue**: API requests from the frontend were blocked due to CORS policy.
- **Solution**: Configured CORS in Spring Boot with a custom configuration class to allow requests from the frontend.

### Password Security
- **Issue**: Storing plain-text passwords in the database.
- **Solution**: Integrated `BCryptPasswordEncoder` to hash passwords before saving them.

### Navigation and Routing
- **Issue**: Managing navigation within a single-page application.
- **Solution**: Used `react-router-dom`'s `Routes`, `Route`, and `useNavigate` for handling routing and navigation.

### Component State Management
- **Issue**: Maintaining state across different components.
- **Solution**: Utilized React's `useState` hook and passed state and functions as props to child components.

### Deprecated Methods
- **Issue**: React 18 deprecated the `render` method from `react-dom`.
- **Solution**: Updated the entry point to use `createRoot` from `react-dom/client`.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- React and Spring Boot documentation
- Tutorials and resources from the developer community

Feel free to review the code and explore the application on [GitHub](https://github.com/DonnaMagbag/task-manager-app).

