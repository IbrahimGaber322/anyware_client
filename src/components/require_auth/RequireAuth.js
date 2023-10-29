import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as paths from "../../paths.js";
import {
  setUserTokenFromApi,
  setUserTokenFromBrowserStorage,
  deleteUserTokenFromBrowserStorage,
} from "../../redux/actionGenerators/authGenerators.js";
import {
  getFromStorage,
  keys,
} from "../../utils/browser_storage/local_storage.js";

export const RequireAuth = (props) => {
  // Get the token from browser storage
  const tokenFromBrowserStorage = getFromStorage(keys.token);

  if (tokenFromBrowserStorage) {
    return props.children;
  }

  // If there's no token in storage, remove any existing token and navigate to the registration path
  props.deleteUserTokenFromBrowserStorage();
  return <Navigate to={paths.REGISTRATION_PATH} />;
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setUserTokenFromApi: (token) => dispatch(setUserTokenFromApi(token)),
    setUserTokenFromBrowserStorage: (token) =>
      dispatch(setUserTokenFromBrowserStorage(token)),
    deleteUserTokenFromBrowserStorage: () =>
      dispatch(deleteUserTokenFromBrowserStorage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
