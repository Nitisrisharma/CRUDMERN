import React, { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await updateUser(editingUser.id, { name, email });
      setEditingUser(null);
    } else {
      await createUser({ name, email });
    }
    setName("");
    setEmail("");
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>User Management</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          {editingUser ? "Update User" : "Add User"}
        </button>
      </form>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)} style={editButtonStyle}>Edit</button>
                <button onClick={() => handleDelete(user.id)} style={deleteButtonStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 🌟 Custom Styles
const containerStyle = {
  maxWidth: "600px",
  margin: "40px auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
};

const titleStyle = {
  textAlign: "center",
  color: "#2C3E50",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "20px",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#27ae60",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const editButtonStyle = {
  padding: "6px 10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#f39c12",
  color: "white",
  cursor: "pointer",
  marginRight: "10px",
};

const deleteButtonStyle = {
  padding: "6px 10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#e74c3c",
  color: "white",
  cursor: "pointer",
};

export default Users;
