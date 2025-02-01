const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const config = require('../config');


const handleGetAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, "-password"); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

const handleUserRegister = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const dbUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });
        res.status(201).json({ message: 'User registered successfully', user: dbUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Invalid Email or Password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }

        const token = jwt.sign({ role: user.role, id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'User Login successfull', token, id : user._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { handleUserRegister, handleUserLogin, handleGetAllUsers };