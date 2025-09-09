import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [editingId, setEditingId] = useState(null);

  const API_URL = "http://localhost:5000/api/users";

  /**
   * Obtener usuarios
   */
  const fetchUsers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /**
   * Crear usuario
   */
  const addUser = async () => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, age: Number(age) }),
      });
      setName("");
      setEmail("");
      setPassword("");
      setAge("");
      fetchUsers();
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  /**
   *  Editar usuario
   */
  const editUser = (user) => {
    setEditingId(user._id);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password || "");
    setAge(user.age);
  };

  /**
   * Actualizar usuario
   */
  const updateUser = async () => {
    try {
      await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, age: Number(age) }),
      });
      setEditingId(null);
      setName("");
      setEmail("");
      setPassword("");
      setAge("");
      fetchUsers();
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  /**
   * Eliminar usuario
   */
  const deleteUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchUsers();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <div>
      <h1>Users</h1>

      {/* Formulario */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {editingId ? (
          <button onClick={updateUser}>Actualizar</button>
        ) : (
          <button onClick={addUser}>Agregar</button>
        )}
      </div>

      {/* Tabla de usuarios */}
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => editUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
