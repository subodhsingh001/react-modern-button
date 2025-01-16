import React from "react";
import "./Button.css"; // Default styles for the button

interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string; // Allow users to pass custom CSS classes
  style?: React.CSSProperties; // Allow users to pass inline styles
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "primary",
  size = "medium",
  className = "",
  style = {},
}) => {
  // Default styles based on props
  const getDefaultStyles = (): React.CSSProperties => {
    let padding, fontSize;

    switch (size) {
      case "small":
        padding = "5px 10px";
        fontSize = "12px";
        break;
      case "large":
        padding = "15px 30px";
        fontSize = "18px";
        break;
      default:
        padding = "10px 20px";
        fontSize = "14px";
    }

    return {
      padding,
      fontSize,
      backgroundColor: color === "primary" ? "#007bff" : "#6c757d",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      width: "100%", // Responsive: Make the button fluid by default
      maxWidth: "300px", // Limit the max width
      boxSizing: "border-box", // Ensure padding is included in the width
      ...style, // Merge user-provided inline styles
    };
  };

  return (
    <button
      className={`default-button ${className}`.trim()} // Allow custom and default classes
      style={getDefaultStyles()}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
