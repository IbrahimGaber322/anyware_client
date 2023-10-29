import { getFromStorage, keys } from "../browser_storage/local_storage.js"; // Importing functions to interact with local storage

const baseUrl = process.env.REACT_APP_BASE_URL; // Base URL for API endpoints

// Function to retrieve the token for authorization
const getToken = () => {
  // Check if the environment is the browser
  if (typeof window !== "undefined") {
    return (
      process.env.REACT_APP_BEARER_SECRETE + " " + getFromStorage(keys.token)
    ); // Get and append token for authorization
  }
};

// Functions to define different API request configurations
const signup = (body) => ({
  method: "POST",
  url: `${baseUrl}/auth/signup`, // URL for user signup
  data: body, // Request body
});

const login = (body) => ({
  method: "POST",
  url: `${baseUrl}/auth/login`, // URL for user login
  data: body, // Request body
});

const logout = () => ({
  method: "POST",
  url: `${baseUrl}/auth/logout`, // URL for user logout
  headers: {
    Authorization: getToken(), // Authorization header using the retrieved token
  },
});

const getAllAnnouncements = () => ({
  method: "GET",
  url: `${baseUrl}/announcement/`, // URL to fetch all announcements
  headers: {
    Authorization: getToken(), // Authorization header using the retrieved token
  },
});

const getAllDues = () => ({
  method: "GET",
  url: `${baseUrl}/due/`, // URL to fetch all dues
  headers: {
    Authorization: getToken(), // Authorization header using the retrieved token
  },
});

// Object containing functions for different API requests
const axiosServiceObj = {
  signup,
  login,
  logout,
  getAllAnnouncements,
  getAllDues,
};

export default axiosServiceObj; // Exporting the object with API request functions
