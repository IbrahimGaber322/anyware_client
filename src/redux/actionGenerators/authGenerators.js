import * as actionTypes from "../actionTypes.js";

// Action creator function to set user token from API
export const setUserTokenFromApi = (token) => ({
  type: actionTypes.SET_USER_FROM_API, // Action type to set user token received from the API
  token, // Token obtained from the API response
});

// Action creator function to set user token from browser storage
export const setUserTokenFromBrowserStorage = (token) => ({
  type: actionTypes.SET_USER_FROM_BROWSER_STORAGE, // Action type to set user token retrieved from browser storage
  token, // Token obtained from browser storage
});

// Action creator function to delete user token from browser storage
export const deleteUserTokenFromBrowserStorage = () => ({
  type: actionTypes.DELETE_USER_FROM_BROWSER_STORAGE, // Action type to delete user token from browser storage
});
