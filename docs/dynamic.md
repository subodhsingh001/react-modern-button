import React from "react";
import { Button } from "react-modern-button";

const buttonData = [
  { id: 1, label: "Button 1", color: "primary" },
  { id: 2, label: "Button 2", color: "secondary" },
  { id: 3, label: "Button 3", color: "primary" },
];

const App = () => (
  <div>
    <h1>Dynamic Buttons</h1>
    {buttonData.map((button) => (
      <Button
        key={button.id}
        label={button.label}
        color={button.color}
        onClick={() => alert(`${button.label} clicked!`)}
      />
    ))}
  </div>
);

export default App;
