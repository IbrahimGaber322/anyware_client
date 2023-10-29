import axios from "axios"; // Importing the Axios library for making HTTP requests

/**
 * Function to perform an asynchronous Axios request based on the provided service object configuration.
 * @param {Object} serviceObject - An object containing the Axios request configuration.
 * @returns {Promise} - A Promise that resolves to the Axios response or rejects with an error.
 */
async function axiosRequest(serviceObject) {
  // Try making the Axios request using the provided serviceObject configuration
  try {
    const res = await axios(serviceObject); // Await the Axios request
    return res; // Return the response if successful
  } catch (err) {
    // Catch and handle any errors that occur during the request
    return err; // Return the error response
  }
}

export default axiosRequest; // Exporting the axiosRequest function for use in other parts of the code
