import React from "react";
import ShadowText from "./ShadowText/ShadowText";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ShadowText />
      </div>
    </>
  );
}

export default App;
