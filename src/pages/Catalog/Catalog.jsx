import { Outlet } from "react-router";
import Filters from "components/Filters/Filters";
import CarsList from "components/CarsList/CarsList";
import cl from "styles/Catalog.module.css";

const Catalog = function () {
  return (
    <div className={cl["catalog-container"]}>
      <Filters />
      <CarsList />
      <Outlet />
    </div>
  );
};

export default Catalog;
