import { jwtDecode } from "jwt-decode"; // Import the jsonwebtoken package

/**
 * Function to verify and check the validity of a token
 * @param {string} token - The token to be verified and checked for validity
 * @returns {Object} An object with verification and validity status
 */
export const verifyAndCheckTokenValidity = token => {
  if (!token) {
    // If token is not provided or invalid, return false for both verification and validity
    return {
      isVerified: false,
      isValid: false
    };
  }

  try {
    // Attempt to verify the token using the provided secret key
    const decoded = jwtDecode(token, process.env.REACT_APP_JWT_SECRET_KEY); // Replace 'your_secret_key' with your actual secret key
    const current = Math.floor(Date.now() / 1000);

    // If successfully decoded, return verification status and check if it's still valid
    return {
      isVerified: true,
      isValid: decoded.exp > current
    };
  } catch (error) {
    // If verification fails due to an invalid or expired token, return verification and validity status as false
    return {
      isVerified: false,
      isValid: false
    };
  }
};
