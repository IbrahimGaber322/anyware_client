import * as actionTypes from "../actionTypes.js";

// Action creator function for getting data for the home page from an API
export const getData = (payload) => ({
  type: actionTypes.GET_HOME_PAGE_DATA_FROM_API, // Action type to fetch data for the home page
  payload, // Payload that may contain fetched data to be stored in the Redux store
});
