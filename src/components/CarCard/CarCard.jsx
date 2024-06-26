import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "reduxFiles/favorites/slice";
import Button from "components/Button/Button";
import { IconPack } from "helpers/IconPack";
import useScreenSize from "hooks/useScreenSize";
import cl from "styles/CarCard.module.css";

const CarCard = ({ car }) => {
  const {
    _id,
    name,
    price,
    location: vehicle_location,
    description,
    details,
    rating,
    reviews,
    gallery,
  } = car;

  const { favorites } = useSelector((state) => state.favorites);
  const isProductInFavorites = favorites.some((v) => v._id === _id);

  const dispatch = useDispatch();
  const location = useLocation();
  const handleFavoriteToggle = () => {
    if (!isProductInFavorites) {
      dispatch(addToFavorites(car));
    } else {
      dispatch(removeFromFavorites(_id));
    }
  };

  const { width: screenWidth } = useScreenSize();

  const formatDescription = () => {
    if (screenWidth < 768) {
      return description.slice(0, 90) + "...";
    } else if (screenWidth >= 768 && screenWidth < 1440) {
      return description.slice(0, 200) + "...";
    } else {
      return description.slice(0, 55) + "...";
    }
  };

  return (
    <li
      key={`vehicle-card-${_id}`}
      data-vehicle={_id}
      className={cl["vehicle-item"]}
    >
      <img
        className={cl.img}
        src={gallery.length ? gallery[0] : "not-found-img.jpg"}
        alt={name}
      />

      <div className={cl["content-wrapper"]}>
        <div className={cl["mt-position"]}>
          <div className={cl["info-wrapper-top"]}>
            <h3 className={cl.name}>{name}</h3>
            <div className={cl.wrapper}>
              <p className={cl.price}>€{price}</p>
              <button className={cl["fav-btn"]} onClick={handleFavoriteToggle}>
                <IconPack id={isProductInFavorites ? "heart-active" : "heart"} />
              </button>
            </div>
          </div>
          <div className={cl["info-wrapper"]}>
            <p className={cl.rating}>
              <IconPack id="rating" />
              <Link to={`cars/${_id}/reviews`} state={{ from: location }}>
                <span>{rating}</span>
                <span className={cl["reviews-number"]}>
                  ({reviews.length}
                  {reviews.length === 1 ? " Review" : " Reviews"})
                </span>
              </Link>
            </p>
            <p className={cl.location}>
              <IconPack id="location" />
              <span>{vehicle_location}</span>
            </p>
          </div>
          <p className={cl.description}>{formatDescription()}</p>
        </div>
        <ul className={cl["details-list"]}>
          {Object.entries(details).map(([key, value], index) => {
            if (
              (screenWidth < 768 && index >= 6) ||
              (screenWidth >= 1440 && index >= 8)
            ) {
              return null;
            }

            if (value && key !== "bathroom") {
              return (
                <Button
                  tag="li"
                  className="box-details"
                  key={`vehicle-card-details-${key}`}
                >
                  <IconPack id={key} />
                  <p>
                    <span>{value}</span>
                    <span> {key}</span>
                  </p>
                </Button>
              );
            }
            return null;
          })}
        </ul>
        <Button className="btn-loadmore" type="button" tag="button">
          <Link to={`cars/${_id}/features`} state={{ from: location }}>
            Show More
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default CarCard;
