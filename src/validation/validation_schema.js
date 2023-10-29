import { default as joi } from "joi"; // Importing Joi for object schema validation
import { userKeyPattern } from "./joi_key_pattern.js"; // Importing user-specific Joi key patterns

// Joi schema for login validation
export const login = joi.object({
  userName: userKeyPattern.userName.required(), // Username validation using the defined pattern, required field
  password: userKeyPattern.password.required(), // Password validation using the defined pattern, required field
});

// Joi schema for signup validation
export const signup = joi.object({
  name: userKeyPattern.name.required(), // Name validation using the defined pattern, required field
  userName: userKeyPattern.userName.required(), // Username validation using the defined pattern, required field
  password: userKeyPattern.password.required(), // Password validation using the defined pattern, required field
  cPassword: userKeyPattern.cPassword("password").required(), // Confirm password validation, required field
});
