import "./Intro.scss";
import personalNotebook from "../../img/undraw_personal_notebook_re_d7dc.svg";
import Button from "../button/Button.js";

const Intro = () => {
  return (
    <div className="intro">
      <div className="text">
        <h2>Preparing for Final Exams</h2>

        <p>
          As the final exams approach, it's crucial to stay focused and manage
          time efficiently. Studying diligently and understanding the concepts
          deeply is key to success. Remember, success is not just about grades;
          it's about learning and growth.
        </p>

        <span>
          Exploring different study techniques and finding what works best for
          you is pivotal for effective learning.
        </span>

        <div>
          <Button fill>Explore Exam Tips</Button>
        </div>
      </div>

      <div className="img">
        <img src={personalNotebook} alt="Personal Notebook" />
      </div>
    </div>
  );
};

export default Intro;
