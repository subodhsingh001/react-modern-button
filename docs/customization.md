🎨 Customization Examples
Using Props
Customize buttons with built-in props:

jsx
Copy
Edit
import React from "react";
import { Button } from "react-modern-button";

const App = () => (
  <div>
    <h1>Customized Buttons</h1>
    <Button label="Primary Button" color="primary" />
    <Button label="Secondary Button" color="secondary" />
    <Button label="Small Button" size="small" />
    <Button label="Large Button" size="large" />
    <Button
      label="Custom Styled Button"
      style={{
        backgroundColor: "green",
        color: "white",
        borderRadius: "8px",
      }}
    />
  </div>
);

export default App;