import "./Button.scss";

const Button = (props) => {
  const { full, fill, children } = props; // Destructure props for better readability

  const buttonClasses = `button ${full ? "w-100" : ""} ${fill ? "fill" : ""}`;

  return <button className={buttonClasses}>{children}</button>;
};

export default Button;
