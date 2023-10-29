// Import necessary action types
import * as actionTypes from "../actionTypes.js";

// Initial state for home-related data
const initState = {
  announcements: [], // Array to store announcement data
  dues: [], // Array to store dues data
};

// Reducer function to manage home-related data in the application state
export const homeReducer = (state = initState, action) => {
  // Switch statement to handle different action types dispatched to this reducer
  switch (action.type) {
    case actionTypes.GET_HOME_PAGE_DATA_FROM_API: {
      // Action to update the state with data fetched from the API
      return {
        ...state,
        announcements: action.payload.announcements, // Update announcements data in the state
        dues: action.payload.dues, // Update dues data in the state
      };
    }
    // Default case if no matching action type is found
    default: {
      return state; // Maintain the current state for unhandled actions
    }
  }
};
