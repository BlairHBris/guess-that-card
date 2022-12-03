import React from "react";
import "./App.css";
import CardGenerator from "./components/CardGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess that Card!</h1>
      </header>
      <CardGenerator></CardGenerator>
    </div>
  );
}

export default App;
