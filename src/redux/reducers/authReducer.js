import {
  keys,
  removeFromStorage,
  saveToStorage,
} from "../../utils/browser_storage/local_storage.js";
import * as actionTypes from "../actionTypes.js";

// Initial state for authentication-related data
const initState = {
  token: null, // Initial token value is set to null
};

// Reducer function to manage authentication-related data in the application state
export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_FROM_API: {
      // Action to set user data from API and save the token to local storage
      const token = action.token;
      saveToStorage(keys.token, token); // Saving the token to local storage

      return {
        ...state,
        token, // Update the token in the state
      };
    }

    case actionTypes.SET_USER_FROM_BROWSER_STORAGE: {
      // Action to set user data from browser storage
      return {
        ...state,
        token: action.token, // Update the token in the state from browser storage
      };
    }

    case actionTypes.DELETE_USER_FROM_BROWSER_STORAGE: {
      // Action to delete user data from browser storage and navigate to the registration path
      removeFromStorage(keys.token); // Remove the token from local storage
      // Note: This code will not trigger navigation directly within a reducer

      return {
        ...state,
        token: null, // Reset the token to null in the state
      };
    }

    default: {
      return state; // Maintain the current state for unhandled actions
    }
  }
};
