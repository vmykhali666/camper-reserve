import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useGetCarByIdQuery } from "reduxFiles/cars";
import { IconPack } from "helpers/IconPack";
import cl from "styles/Modal.module.css";

const Modal = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    data: vehicleDetails,
    isFetching,
    isError,
    isSuccess,
    error,
  } = useGetCarByIdQuery(id);

  const handleScrollToSection = () => {
    const element = document.querySelector(`[data-vehicle='${id}']`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleCloseModal = () => {
    navigate(
      location.state?.from
        ? location.state.from
        : `/${location.pathname.split("/")[1]}`
    );
    handleScrollToSection(id);
    document.body.classList.remove("lock");
  };

  const handleEscKeyPress = (event) => {
    if (event.keyCode === 27) {
      handleCloseModal();
    }
  };

  const handleBackdropClick = ({ target }) => {
    if (target.classList.contains(cl.backdrop)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeyPress);
    document.addEventListener("click", handleBackdropClick);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
      document.removeEventListener("click", handleBackdropClick);
    };
  }, []);

  if (isFetching) {
    return <p>Loading...</p>;
  }

  if (isSuccess) {
    const { name, price, location, description, rating, reviews, gallery } =
      vehicleDetails;
    return createPortal(
      <div className={cl.backdrop}>
        <div className={cl.wrapper}>
          <div className={cl["modal-content"]}>
            <button className={cl["close-btn"]} onClick={handleCloseModal}>
              <IconPack id="close" />
            </button>

            <div className={cl["content-wrapper"]}>
              <h3 className={cl.name}>{name}</h3>
              <div className={cl["info-wrapper"]}>
                <p className={cl.rating}>
                  <IconPack id="rating" />
                  <Link to="reviews" state={{ from: location }}>
                    <span>{rating}</span>
                    <span className={cl["reviews-number"]}>
                      ({reviews.length}
                      {reviews.length === 1 ? " Review" : " Reviews"})
                    </span>
                  </Link>
                </p>
                <p className={cl.location}>
                  <IconPack id="location" />
                  <span>{location}</span>
                </p>
              </div>
              <p className={cl.price}>€{price}</p>
            </div>

            <ul className={cl["gallery-list"]}>
              {gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={name}
                  className={cl["gallery-item"]}
                />
              ))}
            </ul>

            <p className={cl.description}>{description}</p>

            <div className={cl["links-wrapper"]}>
              <NavLink
                to="features"
                className={({ isActive }) =>
                  isActive ? `${cl.link} ${cl.active}` : cl.link
                }
                state={{ from: location }}
              >
                Features
              </NavLink>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  isActive ? `${cl.link} ${cl.active}` : cl.link
                }
                state={{ from: location }}
              >
                Reviews
              </NavLink>
            </div>

            <Outlet />
          </div>
        </div>
      </div>,
      document.querySelector("#root-modal")
    );
  }

  if (isError) {
    return <p>{error}</p>;
  }
};

export default Modal;
