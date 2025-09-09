const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://admin:123456@localhost:27017'); 
        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Error al conectar MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;