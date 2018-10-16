//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be Ryan Waite 9/22/18 Walk through

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom"; //importing browser router

ReactDOM.render(
  //wrap browser router around root
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
