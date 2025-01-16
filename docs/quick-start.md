🔥 Quick Start
Here's how to get started with react-modern-button:
import React from "react";
import { Button } from "react-modern-button";
import "react-modern-button/dist/index.css"; // Import default styles

const App = () => (
  <div>
    <h1>React Modern Button</h1>
    <Button
      label="Click Me"
      color="primary"
      onClick={() => alert("Button clicked!")}
    />
  </div>
);

export default App;
