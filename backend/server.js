const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
