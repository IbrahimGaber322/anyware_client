import "./styles/style.scss"; // Importing styles

import { Route, Routes } from "react-router-dom"; // Importing necessary components from react-router-dom
import * as paths from "./paths.js"; // Importing path constants

import HomeAuth from "./pages/home/HomeAuth.js"; // Importing the component for the authenticated home page
import Registration from "./pages/registration/Registration.js"; // Importing the registration component
import NotFound from "./pages/not_found/NotFound.js"; // Importing the component for 404 Not Found page

// App component defining various routes for the application
const App = () => {
  return (
    <Routes>
      <Route path={paths.REGISTRATION_PATH} element={<Registration />} />{" "}
      {/* Route for the Registration page */}
      <Route path={paths.HOME_PATH} element={<HomeAuth />} />{" "}
      {/* Route for the authenticated Home page */}
      <Route path="*" element={<NotFound />} />{" "}
      {/* Route for any unspecified paths leading to the 404 Not Found page */}
    </Routes>
  );
};

export default App; // Exporting the App component
