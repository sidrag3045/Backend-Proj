// Requrining necessary modules
const express = require('express');
const router = express.Router();
const { handleGetAllEvents, handleCreateEvent, handleGetEventById, handleUpdateEventById, handleDeleteEventById, handleRegisterForEvent } = require('../controllers/eventController');
const { verifyJWT, isAdmin } = require('../middlewares/authMiddleware');


// Defining routes
// Handling GET and POST requests on '/events' route
router.get("/", verifyJWT, handleGetAllEvents);

router.post("/", verifyJWT, isAdmin, handleCreateEvent);

// Handling GET, PUT and DELETE requests on '/events/:id' route
router.get("/:id", verifyJWT, handleGetEventById);

router.put("/:id", verifyJWT, isAdmin, handleUpdateEventById);

router.delete("/:id", verifyJWT, isAdmin, handleDeleteEventById);

// Handling POST requests on '/events/:id/register' route
router.post("/:id/register", verifyJWT, handleRegisterForEvent);


// Exporting router
module.exports = router;
