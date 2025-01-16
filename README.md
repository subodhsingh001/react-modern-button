#react-modern-button

A simple, reusable, and customizable button component for React and Next.js. Designed to be responsive, lightweight, and developer-friendly, while allowing users to override styles for their specific needs.


![NPM Version](https://img.shields.io/npm/v/react-modern-button)
![NPM Downloads](https://img.shields.io/npm/dt/react-modern-button)
![GitHub Issues](https://img.shields.io/github/issues/subodh001/react-modern-button)
![MIT License](https://img.shields.io/github/license/subodh001/react-modern-button)


## Features

- Fully customizable styles via `className` or `style` props.
- Comes with responsive default styles.
- Optimized for React and Next.js.
- Lightweight and tree-shaking friendly.
- Simple to use and extend.
"keywords": ["react", "button", "modern", "UI"]

---

## Installation

Install the package using npm or yarn:

```bash
# Using npm
npm install react-modern-button

# Using yarn
yarn add react-modern-button


# Quick Start
Here’s how to get started with the react-modern-button package:

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

#Customizing with Props
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

#Customizing with CSS
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

#Dynamic Buttons

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
