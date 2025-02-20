import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "#4CAF50", // Elegant dark blue-grey for a premium feel
    color: "white",
    padding: "12px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
    fontSize: "14px",
    letterSpacing: "0.5px",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} CRUD App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
