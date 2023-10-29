import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM from client, ensure this is necessary
import App from "./App.js"; // Importing the main App component
import { Provider } from "react-redux"; // Importing Redux's Provider
import store from "./redux/store.js"; // Importing the Redux store
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing

// Creating a root to render the entire application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the application by wrapping it with Redux Provider and React Router BrowserRouter
root.render(
  <Provider store={store}>
    {" "}
    {/* Providing the Redux store to the entire application */}
    <BrowserRouter basename="/">
      {" "}
      {/* Using BrowserRouter for routing with a base URL */}
      <App /> {/* Rendering the main App component */}
    </BrowserRouter>
  </Provider>
);
