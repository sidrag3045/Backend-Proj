require('dotenv').config(); 
const mongoose = require('mongoose');

async function connectToMongoDB(url) {
  return mongoose.connect(url);
}
module.exports = {
  connectToMongoDB,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI
};
