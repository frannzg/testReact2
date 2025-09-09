const User = require('../models/User');

/**
 * Obtener todos los usuarios
 */
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error){
        res.status(500).json({ message: error.message });
    }
};

/**
 * Crear un usuario
 */
const createUser = async (req, res) => {
    const { name, email, password, age } = req.body;

    if (!name || !email || !password || !age){
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    try {
        const user = new User({ name, email, password, age });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

/**
 * Actualizar un usuario
 */
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { name, email, password, age }, { new: true });
        res.json(user);
    } catch (error){
        res.status(400).json({ message: error.message });
    }
}


/**
 * Eliminar un usuario
 */
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.json({ message: 'Usuario eliminado'});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getUsers, createUser, updateUser, deleteUser };