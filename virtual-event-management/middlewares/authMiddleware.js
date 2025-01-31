const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyJWT = (req, res, next) => {
    const token = req.header("authorization")?.replace("Bearer ", ""); 

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Invalid or Expired Token" });
    }
};

const isAdmin = async (req, res, next) => {
    {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Forbidden: Admin access required" });
        }
        next();
    }
};


module.exports = { verifyJWT, isAdmin };