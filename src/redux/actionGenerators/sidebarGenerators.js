import * as actionTypes from "../actionTypes.js";

// Action creator function for toggling the sidebar
export const sidebarToggler = () => ({
  type: actionTypes.SIDEBAR_TOGGLE, // Action type to indicate a sidebar toggle
});
