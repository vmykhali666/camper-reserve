import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "components/Container/Container";
import { IconPack } from "helpers/IconPack";
import css from "styles/Header.module.css";

export const Header = function () {
  const location = useLocation();

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerWrapper}>
          <Link className={css.logo} to="/" state={{ from: location }}>
            <IconPack id="logo" />
          </Link>

          <nav className={css.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.active}` : css.link
              }
              to="/catalog"
              state={{ from: location }}
            >
              Catalog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.link} ${css.active}` : css.link
              }
              to="/favorites"
              state={{ from: location }}
            >
              Favorites
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};
