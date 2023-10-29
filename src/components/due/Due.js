import "./Due.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button.js";

const Quiz = (props) => {
  const { type, title, list } = props; // Destructuring props for cleaner access

  const renderIcon = () => {
    const icon = type === "quiz" ? faHourglassHalf : faClipboardCheck;
    return <FontAwesomeIcon size="xl" icon={icon} />;
  };

  return (
    <div className="due">
      <div className="title">
        <span className="icon">{renderIcon()}</span>
        <h4>{title}</h4>
      </div>

      <ul className="list">
        <li>
          <strong>Course:</strong> {list.course}
        </li>
        <li>
          <strong>Topic:</strong> {list.topic}
        </li>
        <li>
          <strong>Due Date:</strong> {list.dueDate}
        </li>
      </ul>

      <Button full>
        {type === "quiz" ? "Start Quiz" : "Solve Assignment"}
      </Button>
      {/* Alternatively, you can use a button element */}
      {/* <button className='button'>{type === 'quiz' ? 'Start Quiz' : 'Solve Assignment'}</button> */}
    </div>
  );
};

export default Quiz;
