import * as actionTypes from "../actionTypes.js";

// Action creator function for changing the count
export const countChange = (payload) => ({
  type: actionTypes.COUNT_CHANGE, // Action type to change the count
  payload, // Payload that contains the value by which the count will be changed
});
