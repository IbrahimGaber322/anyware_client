import "./NotFound.scss";
import { Link } from "react-router-dom";
import * as paths from "../../paths.js";

const NotFound = () => {
  return (
    // Main container for the "not-found" component
    <main className="not-found">
      {/* Text indicating '404 Not Found' */}
      <p>404 Not Found</p>

      {/* Link to redirect to the home page */}
      <Link to={paths.HOME_PATH}>Go to home</Link>
    </main>
  );
};

export default NotFound;
