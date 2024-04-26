import css from "styles/Button.module.css";

const Button = function ({ tag, type, className, children, onClick }) {
  switch (tag) {
    case "li":
      return <li className={css[className]}>{children}</li>;

    case "button":
      return (
        <button type={type} className={css[className]} onClick={onClick}>
          {children}
        </button>
      );

    default:
      return null;
  }
};

export default Button;
