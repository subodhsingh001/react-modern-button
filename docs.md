🔥 Quick Start
Here's how to get started with react-modern-button:

jsx
Copy
Edit
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
Using CSS
Apply custom styles with CSS:

jsx
Copy
Edit
import React from "react";
import { Button } from "react-modern-button";
import "./custom-styles.css"; // Your custom CSS file

const App = () => (
  <div>
    <h1>Custom CSS Styling</h1>
    <Button
      label="Custom Button"
      className="my-custom-class"
      onClick={() => alert("Custom button clicked!")}
    />
  </div>
);

export default App;
Dynamic Buttons
Easily create dynamic buttons based on data:

jsx
Copy
Edit
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
🛠 Props
Prop	Type	Default	Description
label	string	null	Text to display on the button.
color	string	primary	Button color (primary, secondary).
size	string	medium	Button size (small, medium, large).
className	string	null	Custom CSS class for styling.
style	object	{}	Inline styles for the button.
onClick	function	null	Function to call on button click.