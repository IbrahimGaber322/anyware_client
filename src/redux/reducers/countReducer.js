// Import necessary action types
import * as actionTypes from "../actionTypes.js";

// Initial state for the count-related data
const initState = {
  count: 0, // Initial count value
};

// Reducer function for managing count-related data in the application state
export const countReducer = (state = initState, action) => {
  // Switch statement to handle different action types dispatched to this reducer
  switch (action.type) {
    case actionTypes.COUNT_CHANGE: {
      console.log("COUNT_CHANGE"); // Logging when the COUNT_CHANGE action is handled

      return {
        ...state,
        count: state.count + action.payload, // Update the count value based on the action's payload
      };
    }
    // Default case if no matching action type is found
    default: {
      return state; // Maintain the current state for unhandled actions
    }
  }
};
