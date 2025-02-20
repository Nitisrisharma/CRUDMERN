import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "#4CAF50", // Fresh green color for a modern UI
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
  };

  const logoStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
  };

  return (
    <nav style={headerStyle}>
      <Link to="/" style={logoStyle}>CRUD MERN APP</Link>
    </nav>
  );
};

export default Header;
