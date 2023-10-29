// Importing action types and utility function
import * as actionTypes from "../actionTypes.js";
import { isMobileScreen } from "../../utils/utilities.js";

// Initial state for the sidebar
const initState = {
  active: isMobileScreen() === false, // Determines the initial state of the sidebar based on screen size
};

// Reducer function for the sidebar state
export const sidebarReducer = (state = initState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    case actionTypes.SIDEBAR_TOGGLE: {
      // Action to toggle the sidebar
      return {
        ...state,
        active: !state.active, // Toggles the active state of the sidebar
      };
    }
    // Default case if no matching action type is found
    default: {
      return state; // Maintains the current state for unhandled actions
    }
  }
};
