import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "context/StateContext";
import LocationFilter from "components/LocationFilter/LocationFilter";
import EquipmentFilter from "components/EquipmentFilter/EquipmentFilter";
import VenicleType from "components/CarType/CarType";
import Button from "components/Button/Button";

import cl from "styles/Filters.module.css";
import { LIMIT } from "constants";

const INITIAL_FILTERS = {
  location: "",
  transmission: "",
  airConditioner: "",
  form: "",
  bathroom: "",
  kitchen: "",
  TV: "",
  limit: LIMIT,
  page: 1,
};

const Filters = function () {
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState(INITIAL_FILTERS);

  const { searchParams, setSearchParams } = useStateContext();

  useEffect(() => {
    const updatedFilters = {};

    Object.keys(selectedFilters).forEach((key) => {
      const valueFromParams = searchParams.get(key);
      updatedFilters[key] = valueFromParams || selectedFilters[key];
    });

    setSelectedFilters(updatedFilters);
  }, [searchParams]);

  const handleFilterChange = (filterKey, value, isChecked) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: isChecked ? value : "",
    }));
  };

  const handleFilter = () => {
    const searchParams = {};

    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value) {
        searchParams[key] = value;
      }
    });

    searchParams["page"] = 1;
    setSearchParams(searchParams);
  };

  const onChange = (target) => {
    let filterKey = "";

    if (target.name === "location") {
      filterKey = "location";
    } else if (target.value === "automatic") {
      filterKey = "transmission";
    } else {
      filterKey = target?.dataset?.equipment ? target.name : "form";
    }

    handleFilterChange(filterKey, target.value, target.checked);
  };

  return (
    <div className={cl["filter-container"]}>
      <LocationFilter onChange={onChange} selectedFilters={selectedFilters} />

      <div className={cl["filters-wrapper"]}>
        <h4 className={cl.heading}>Filters</h4>
        <EquipmentFilter
          onChange={onChange}
          selectedFilters={selectedFilters}
        />
        <VenicleType onChange={onChange} selectedFilters={selectedFilters} />
      </div>

      <div className={cl["btns-wrapper"]}>
        <Button
          className="btn-search"
          type="button"
          tag="button"
          onClick={handleFilter}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Filters;
