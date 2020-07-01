import React from "react";
import ReactDOM from "react-dom";
import Boxes from "./Boxes";
import "./styles/index.css";

const App = () => {
  return (
    <div class="main-body">
      <h1>Glass half empty</h1>
      <Boxes />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
