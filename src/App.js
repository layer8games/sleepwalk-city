// import Sample from './Sample.js'
// import SampleWASM from './Sample.wasm'
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
(  async () => {
    const response = await fetch("Add.wasm");
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    const instance = new WebAssembly.Instance(module);
    const result = instance.exports.Add(1, 2);
    console.log(result);
  })();


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>Nothing to see here yet</div>
    </div>
  );
}

export default App;
