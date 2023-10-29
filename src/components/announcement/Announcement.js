import "./Announcement.scss";
import avatar from "../../img/undraw_pic_profile_re_7g2h.svg";

const Announcement = (props) => {
  const { username, title, description } = props; // Destructure props for better readability

  return (
    <div className="announcement">
      <div className="col">
        <div className="user">
          <img src={avatar} alt="avatar" />

          <div className="text">
            <h5 className="name">{username}</h5>
            <p className="title">{title}</p>{" "}
            {/* Changed class name from 'name' to 'title' */}
          </div>
        </div>
      </div>

      <div className="col">
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Announcement;
