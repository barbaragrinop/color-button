import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonProps, setButtonProps] = useState({
    name: "Change to blue",
    color: "red",
  });
  const [disabled, setDisabled] = useState(false);

  function changeButtonColor() {
    let newButtonColor = buttonProps.color === "red" ? "blue" : "red";
    let newButtonName =
      buttonProps.name === "Change to blue"
        ? "Change to red"
        : "Change to blue";
    setButtonProps({ name: newButtonName, color: newButtonColor });
  }

  return (
    <div>
      <button
        onClick={changeButtonColor}
        style={{
          backgroundColor: !disabled ? buttonProps.color : "gray",
          color: "white",
        }}
        disabled={disabled}
      >
        {buttonProps.name}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
