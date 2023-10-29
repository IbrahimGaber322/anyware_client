import { default as joi } from "joi"; // Importing Joi for object schema validation

export const userKeyPattern = {
  // Pattern for validating the 'name' field
  name: joi.string().pattern(new RegExp("^[a-zA-Z]+$")).messages({
    "string.pattern.base": "The name should be in English alphabet",
  }),

  // Pattern for validating the 'userName' field
  userName: joi.string().pattern(new RegExp("^@[a-zA-Z0-9]{3,14}$")).messages({
    "string.pattern.base": "Username is not valid",
  }),

  // Pattern for validating the 'password' field
  password: joi
    .string()
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?_!@.$%^&*-]).{8,}$"
      )
    )
    .messages({
      "string.pattern.base":
        "Password minimum length is 8 with at least one lowercase, one uppercase, one number, and one special character",
    }),

  // Pattern for confirming the 'cPassword' (Confirm Password) field
  cPassword: (ref) =>
    joi.string().valid(joi.ref(ref)).messages({
      "any.only": `Password and Confirm Password must be the same`,
      "string.empty": "Confirm Password must not be empty",
    }),

  // Pattern for validating 'id'
  id: joi.string().min(24).max(24), // Assumed to be a 24-character string

  // Pattern for validating 'token'
  token: joi.string(), // No specific validation defined, accepting any string for 'token'

  // Pattern for validating 'role'
  role: joi.valid("admin", "instructor", "student"), // Defines the valid roles in the system
};
