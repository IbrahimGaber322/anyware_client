import "../Form.scss";
import { useState } from "react";
import Button from "../../../components/button/Button.js";
import validation from "../../../validation/validation.js";
import * as validators from "../../../validation/validation_schema.js";
import axiosRequest from "../../../utils/api_request/axios_request.js";
import axiosServiceObj from "../../../utils/api_request/axios_service_objects.js";
import { useNavigate } from "react-router-dom";
import * as paths from "../../../paths.js";

import React from "react";
import { connect } from "react-redux";
import {
  deleteUserTokenFromBrowserStorage,
  setUserTokenFromApi,
  setUserTokenFromBrowserStorage,
} from "../../../redux/actionGenerators/authGenerators.js";

/**
 * Component for the sign-in form.
 * Handles user sign-in, validation, and form submission.
 * @param {Object} props - Props for the component.
 */
export const SigninForm = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ userName: "", password: "" });
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
    if (isError) clearErrors(); // Clear errors on input change
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
    const validationErrors = validation(user, validators.login);

    if (validationErrors?.length) {
      // If there are validation errors, display them
      const errorsMsg = validationErrors.map((error) => error.msg);
      setIsError(true);
      setErrorMsg(errorsMsg);
      setIsLoading(false);
    } else {
      try {
        // Submit form data to the backend for login
        const res = await axiosRequest(axiosServiceObj.login(user));

        if (res?.response?.status === 404) {
          // Handle specific backend errors
          setIsError(true);
          setErrorMsg([res.response.data.message]);
          setIsLoading(false);
        }

        if (res?.response?.status === 422) {
          const errors = res.response.data.err;
          const errorsMsg = errors.map((error) => error.msg);
          setIsError(true);
          setErrorMsg(errorsMsg);
          setIsLoading(false);
        }

        if (res?.status === 201) {
          // Save user token to auth reducer
          props.setUserTokenFromApi(res.data.token);

          // Redirect to the home page upon successful login
          res?.status === 201 && navigate(paths.HOME_PATH);
        }

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setIsError(true);
        setErrorMsg(["An error occurred. Please try again."]);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="form-container">
      <div className="heading">
        <h1>Sign in</h1>
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

        {/* Input fields for username and password */}
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

        {/* Link to create a new account and the Sign-in button */}
        <div className="input-control">
          <p>
            Don't have an account <br />
            <span role="button" onClick={() => props.setNewAccount(true)}>
              create new account
            </span>
          </p>
          <Button full fill>
            {isLoading ? "Loading..." : "log in"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  active: state.authReducer.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserTokenFromApi: (token) => dispatch(setUserTokenFromApi(token)),
    setUserTokenFromBrowserStorage: (token) =>
      dispatch(setUserTokenFromBrowserStorage(token)),
    deleteUserTokenFromBrowserStorage: () =>
      dispatch(deleteUserTokenFromBrowserStorage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
