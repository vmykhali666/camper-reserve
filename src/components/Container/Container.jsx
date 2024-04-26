import css from "styles/Container.module.css";

export const Container = function ({ children }) {
  return <div className={css.container}>{children}</div>;
};
