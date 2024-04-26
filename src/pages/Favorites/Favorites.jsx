import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import FavoriteCard from "components/FavoriteCard/FavoriteCard";
import cl from "styles/Favorites.module.css";

const FavoritesPage = function () {
  const { favorites } = useSelector((state) => state.favorites);

  return (
    <>
      <ul className={cl["favorites-list"]}>
        {favorites.length ? (
          favorites?.map((vehicle) => (
            <FavoriteCard key={vehicle._id} vehicle={vehicle} />
          ))
        ) : (
          <p>You don't have any saved vehicles yet</p>
        )}
      </ul>

      <Outlet />
    </>
  );
};

export default FavoritesPage;
