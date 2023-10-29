// Keys used for storing/retrieving values in local storage
export const keys = {
  token: "token", // Key used to store and retrieve a 'token' in local storage
};

// Function to save a value to local storage
export const saveToStorage = (key, value) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, JSON.stringify(value)); // Store the value associated with the provided key in local storage
  }
};

// Function to retrieve a value from local storage based on a key
export const getFromStorage = (key) => {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(key)); // Retrieve and parse the value associated with the provided key from local storage
  }
};

// Function to remove a value from local storage based on a key
export const removeFromStorage = (key) => {
  if (typeof window !== "undefined") {
    return window.localStorage.removeItem(key); // Remove the value associated with the provided key from local storage
  }
};
