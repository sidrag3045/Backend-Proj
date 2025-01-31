const express = require('express');
const router = express.Router();
const { handleUserRegister, handleUserLogin, handleGetAllUsers } = require('../controllers/authController');
const {verifyJWT, isAdmin} = require('../middlewares/authMiddleware');

router.get("/", verifyJWT, isAdmin, handleGetAllUsers);

router.post("/register", handleUserRegister);

router.post("/login", handleUserLogin);

module.exports = router;