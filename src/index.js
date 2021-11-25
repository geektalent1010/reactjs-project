import * as React from "react";

import ReactDOM from "react-dom";

export default function App() {
  let todo;
  function handleOnChange(event) {
    console.log(event.target.value);
    todo = event.target.value;
  }
  return (
    <div>
      <h1>My awesome todo app</h1>
      <ul>
        <li>Get milk</li>
        <li>{todo}</li>
        <input onChange={handleOnChange}></input>
        <button>Submit</button>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
