import "./Registration.scss";
import { useState } from "react";
import SignupForm from "../../components/forms/signup/SignupForm.js";
import SigninForm from "../../components/forms/signin/SigninForm.js";

const Registration = () => {
  // State to manage the form view (signup or signin)
  const [newAccount, setNewAccount] = useState(false);

  return (
    // Main container for the registration component
    <main className="registration">
      {/* Section wrapper for the forms */}
      <section className="wrapper">
        {/* Conditional rendering based on 'newAccount' state */}
        {newAccount === true ? (
          // Render SignupForm if 'newAccount' state is true
          <SignupForm setNewAccount={setNewAccount} />
        ) : (
          // Render SigninForm if 'newAccount' state is false
          <SigninForm setNewAccount={setNewAccount} />
        )}
      </section>
    </main>
  );
};

export default Registration;
