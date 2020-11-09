import React from "react";
import ReactDOM from "react-dom";
import { Candidates } from "./Candidates"; // Named import
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Candidates />
  </BrowserRouter>,
  document.getElementById("root")
);
