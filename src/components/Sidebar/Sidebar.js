import "./Sidebar.scss";
import { connect } from "react-redux";
import { sidebarToggler } from "../../redux/actionGenerators/sidebarGenerators.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faCalendarDays,
  faBook,
  faGraduationCap,
  faChartLine,
  faBullhorn,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import * as paths from "../../paths.js";
import { deleteUserTokenFromBrowserStorage } from "../../redux/actionGenerators/authGenerators.js";
import axiosRequest from "../../utils/api_request/axios_request.js";
import axiosServiceObj from "../../utils/api_request/axios_service_objects.js";

const Sidebar = (props) => {
  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await axiosRequest(axiosServiceObj.logout());

    if (res.status === 200) {
      props.deleteUserTokenFromBrowserStorage();
    }
  };

  return (
    <aside className={`sidebar ${props.active ? "active" : ""}`}>
      <div className="close">
        <button onClick={props.toggleSidebar}>close x</button>
      </div>
      <h3>
        <Link to={paths.HOME_PATH}>Coligo</Link>
      </h3>
      <ul>
        <SidebarLink
          to={paths.HOME_PATH}
          name="Dashboard"
          icon={faHouseChimney}
        />
        <SidebarLink
          to={paths.SCHEDULE_PATH}
          name="Schedule"
          icon={faCalendarDays}
        />
        <SidebarLink to={paths.COURSES_PATH} name="Courses" icon={faBook} />
        <SidebarLink
          to={paths.GRADE_BOOK_PATH}
          name="Grade book"
          icon={faGraduationCap}
        />
        <SidebarLink
          to={paths.PERFORMANCE_PATH}
          name="Performance"
          icon={faChartLine}
        />
        <SidebarLink
          to={paths.ANNOUNCEMENT_PATH}
          name="Announcement"
          icon={faBullhorn}
        />

        <li>
          <a href="./#" onClick={handleLogout}>
            <FontAwesomeIcon size="xl" icon={faRightFromBracket} />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

const SidebarLink = ({ to, name, icon }) => {
  return (
    <li>
      <NavLink to={to}>
        <FontAwesomeIcon size="xl" icon={icon} />
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

const mapStateToProps = (state) => ({
  active: state.sidebarReducer.active,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch(sidebarToggler()),
    deleteUserTokenFromBrowserStorage: () =>
      dispatch(deleteUserTokenFromBrowserStorage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
