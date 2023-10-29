// Importing necessary styles and assets
import "./Navbar.scss";
import avatar from "../../img/undraw_pic_profile_re_7g2h.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { sidebarToggler } from "../../redux/actionGenerators/sidebarGenerators.js";

/**
 * Functional component for the application's Navbar.
 * @param {Object} props - Properties passed to the Navbar component.
 * @returns {JSX.Element} Navbar component UI.
 */
export const Navbar = (props) => {
  return (
    <nav className="nav">
      {/* Top row */}
      <div className="row">
        {/* Sidebar controller icon */}
        <button
          className="sidebar-controller-icon"
          onClick={() => props.toggleSidebar()}
        >
          <FontAwesomeIcon size="xl" icon={faBars} />
        </button>

        {/* Welcome message */}
        <h2 className="welcome">welcome, Talia</h2>
      </div>

      {/* Bottom row */}
      <div className="row">
        {/* Search component */}
        <Search />

        {/* Icons for bell, envelope, and avatar */}
        <div className="icons">
          <Icon num="2" icon={faBell} />
          <Icon num="3" icon={faEnvelope} />
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
};

/**
 * Functional component for the search bar.
 * @returns {JSX.Element} Search component UI.
 */
function Search() {
  return (
    <div className="search">
      <FontAwesomeIcon className="search-icon" size="sm" icon={faSearch} />
      <input
        type="search"
        name="search"
        placeholder="search..."
        autoComplete="off"
      />
    </div>
  );
}

/**
 * Functional component for rendering icons with a number.
 * @param {Object} props - Properties for the Icon component.
 * @returns {JSX.Element} Icon component UI.
 */
function Icon(props) {
  return (
    <span className="icon">
      {/* Number associated with the icon */}
      <span className="number">{props.num}</span>
      <FontAwesomeIcon size="xl" icon={props.icon} />
    </span>
  );
}

// Mapping state from Redux store to component props
const mapStateToProps = (state) => ({
  active: state.sidebarReducer.active,
});

// Mapping dispatch functions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(sidebarToggler()),
  };
};

// Connecting the Navbar component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
