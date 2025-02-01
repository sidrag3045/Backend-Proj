const config = require('./config');
const express = require('express');
const app = express();
const PORT = config.PORT || 3000;
const url = config.MONGODB_URI;
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');


config.connectToMongoDB(url).then(() => {
    console.log('Connected to Mongo Database!');
}).catch((error) => {
    console.log('Error:', error);
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/users', authRoutes);
app.use('/events', eventRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});