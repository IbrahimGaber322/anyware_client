import RequireAuth from "../../components/require_auth/RequireAuth.js";
import Home from "./Home.js";

// Component to ensure authentication for rendering the Home component
const HomeAuth = () => {
  return (
    <RequireAuth>
      {/* Render the Home component, requiring authentication */}
      <Home />
    </RequireAuth>
  );
};

export default HomeAuth;
