//https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be Ryan Waite 9/22/18 Walk through
import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import SearchPage from "./components/pages/SearchPage";


class BooksApp extends React.Component {


  //Keep track of page using browser url
  render() {
    return (
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
