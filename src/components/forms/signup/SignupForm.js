import "../Form.scss";
import { useState } from "react";
import Button from "../../../components/button/Button.js";
import validation from "../../../validation/validation.js";
import * as validators from "../../../validation/validation_schema.js";
import axiosRequest from "../../../utils/api_request/axios_request.js";
import axiosServiceObj from "../../../utils/api_request/axios_service_objects.js";

/**
 * Component for the sign-up form.
 * Handles user sign-up, validation, and form submission.
 * @param {Object} props - Props for the component.
 */
const SignupForm = (props) => {
  // State variables for form data, error handling, and loading status
  const [user, setUser] = useState({
    name: "",
    userName: "",
    password: "",
    cPassword: "",
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  /**
   * Function to clear any form errors.
   */
  const clearErrors = () => {
    setIsError(false);
    setErrorMsg(null);
  };

  /**
   * Event handler for input changes in the form fields.
   * @param {Object} e - Event object.
   */
  const handleChange = (e) => {
    if (isError) clearErrors(); // Clears errors on input change
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /**
   * Event handler for form submission.
   * @param {Object} e - Event object.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    clearErrors(); // Clear any existing errors

    // Validation of form inputs
    const validationErrors = validation(user, validators.signup);

    if (validationErrors?.length) {
      // If there are validation errors, display them
      const errorsMsg = validationErrors.map((error) => error.msg);
      setIsError(true);
      setErrorMsg(errorsMsg);
      setIsLoading(false);
    } else {
      try {
        // Submit form data to the backend
        const res = await axiosRequest(axiosServiceObj.signup(user));

        if (res?.response?.status === 405 || res?.response?.status === 422) {
          // Handle specific backend errors
          const resData = res.response.data;
          const errorsMsg = Array.isArray(resData.message)
            ? resData.message
            : [resData.message];
          setIsError(true);
          setErrorMsg(errorsMsg);
        } else if (res?.status === 201) {
          props.setNewAccount(false); // Redirect to the login form upon successful signup
        }
      } catch (error) {
        // Handle any other unexpected errors
        setIsError(true);
        setErrorMsg(["An error occurred. Please try again."]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="form-container">
      <div className="heading">
        <h1>Sign up</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {isError && (
          // Display error messages if isError is true
          <ul>
            {errorMsg.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        {/* Input fields for name, username, password, and confirmation password */}
        <div className="input-control">
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>

        <div className="input-control">
          <input
            type="text"
            name="userName"
            autoComplete="off"
            placeholder="Username starting with @"
            onChange={handleChange}
          />
        </div>

        <div className="input-control">
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>

        <div className="input-control">
          <input
            type="password"
            name="cPassword"
            autoComplete="off"
            placeholder="Confirmation Password"
            onChange={handleChange}
          />
        </div>

        {/* Link to Sign-in and the Submit button */}
        <div className="input-control">
          <p>
            have an account{" "}
            <span role="button" onClick={() => props.setNewAccount(false)}>
              signin
            </span>
          </p>
          <Button full fill disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign up"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
