import { connect } from "react-redux";
import { countChange } from "../redux/actionGenerators/countGenerators.js";

// Component to display and manage a count value
const Count = (props) => {
  // Logging props for reference
  console.log("props", props);

  // Function to increment the count
  const plusClick = () => {
    props.changeVal(2); // Dispatches an action to increment the count by 2
  };

  // Function to decrement the count
  const minusClick = () => {
    props.changeVal(-1); // Dispatches an action to decrement the count by 1
  };

  return (
    <>
      <button onClick={plusClick}>+</button> {/* Button to increment count */}
      <p>{props.count}</p> {/* Display the current count */}
      <button onClick={minusClick}>-</button> {/* Button to decrement count */}
    </>
  );
};

// Function to map state properties to component props
const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count, // Mapping the count value from Redux state to component props
  };
};

// Function to map dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    changeVal: (payload) => dispatch(countChange(payload)), // Mapping the action creator to change the count
  };
};

// Connecting Redux state and actions to the Count component
export default connect(mapStateToProps, mapDispatchToProps)(Count);
