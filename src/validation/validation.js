/**
 * Validates an object against a provided schema and returns an array of validation errors.
 * @param {object} obj - The object to be validated.
 * @param {Joi.Schema} schema - The schema to validate the object against.
 * @returns {Array} - An array containing validation error objects.
 */
const validation = (obj, schema) => {
  const validationErrors = []; // Array to store validation errors

  // Perform validation based on the provided schema
  const validationResult = schema.validate(obj, { abortEarly: false });

  // Check if there are any validation errors
  if (validationResult?.error?.details) {
    // Iterate through each validation error detail
    validationResult.error.details.forEach((detail) => {
      // Modify the error message for better readability
      const msg = detail.message.replace(/"/g, "");

      // Construct an error object with a formatted message and the error type
      validationErrors.push({
        msg: msg.charAt(0).toUpperCase() + msg.slice(1), // Capitalize the first letter of the error message
        type: detail.type, // Record the type of error
      });
    });
  }

  // Logging the validation errors (commented out for production, enable for debugging)
  // console.log('validationErrors', validationErrors);

  return validationErrors; // Return the array of validation errors
};

export default validation; // Exporting the validation function
