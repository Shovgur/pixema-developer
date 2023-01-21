import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Router from "./router";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router></Router>
      </div>
    </Provider>
  );
};

export default App;