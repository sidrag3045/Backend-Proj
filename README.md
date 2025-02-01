# Virtual Event Management Platform

## **Project Description**
This project is a backend system for a virtual event management platform. It provides secure user authentication, event scheduling, and participant management. The system supports essential features such as user registration, login, event creation, updating, and deleting event details, along with participant registration and role-based access control for administrators.

The backend leverages JWT for authentication and bcrypt for secure password hashing. It includes RESTful APIs for various functionalities, ensuring secure access and proper role management.

---

## **Key Features**
- **User Authentication:** Secure user registration and login using bcrypt for password hashing and JWT for session management.
- **Role-Based Access Control:** Differentiate between normal users and administrators.
- **Event Management:**
  - Event creation, updates, and deletion (admin-only).
  - Secure assignment of event organizers.
- **Participant Management:**
  - Users can register for events.
  - Maintain participant lists and manage attendee registrations.
- **RESTful API Endpoints:** For user registration, login, event management, and participant registration.

---

## **Technologies Used**
- **Node.js:** Server runtime environment
- **Express:** Backend framework
- **Mongoose:** MongoDB object modeling tool
- **JWT:** Token-based authentication
- **Bcrypt:** Password hashing
- **Nodemailer:** Email notifications
- **Postman:** API testing

---

## **Installation**

1. **Clone the Repository:**
```bash
https://github.com/sidrag3045/Backend-Proj.git
cd virtual-event-management
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Environment Configuration:**
Create a `.env` file in the project root and add the following:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/virtual-event-management
JWT_SECRET=your_jwt_secret
```

4. **Start the Server:**
```bash
npm start
```

The server will be running at `http://localhost:3000`

---

## **API Endpoints**

### **Authentication Routes:**
- **POST /register** - Register a new user
- **POST /login** - Login and receive JWT

### **Event Management Routes:**
- **POST /events** - Create a new event (Admin only)
- **GET /events** - Get all events
- **PUT /events/:id** - Update event details (Admin only)
- **DELETE /events/:id** - Delete an event (Admin only)

### **Participant Management Routes:**
- **POST /events/:id/register** - Register for an event

---

## **Usage Instructions**

### **1. Register a User**
Make a POST request to `/register` with the following JSON payload:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "yourpassword",
  "role": "user" // or "admin"
}
```

### **2. Login**
Make a POST request to `/login` with:
```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```
You will receive a JWT token in the response.

### **3. Create an Event (Admin Only)**
Make a POST request to `/events` with the following headers and body:
- **Headers:**
```
Authorization: Bearer <JWT Token>
```
- **Body:**
```json
{
  "title": "Tech Conference",
  "description": "An event for tech enthusiasts"
}
```

### **4. Register for an Event**
Make a POST request to `/events/:id/register` (replace `:id` with the event ID) with the Authorization header.

---

## **Error Handling**
- **401 Unauthorized:** Missing or invalid JWT token.
- **403 Forbidden:** User does not have permission.
- **404 Not Found:** Resource not found.
- **500 Internal Server Error:** Server-side issue.

---

## **Directory Structure**
```
virtual-event-management/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── .gitignore
├── config.js
├── index.js
├── package-lock.json
└── package.json


```

---

## **Future Enhancements**
- Implement email notifications using Nodemailer.
- Add event filtering and search capabilities.
- Integrate a frontend for seamless user interaction.

---

## **Authors**
- **Raghav Chanana** - Full Stack Developer

---

Feel free to contribute to the project by raising issues or submitting pull requests!


