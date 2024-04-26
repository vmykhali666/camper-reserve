import Select from "react-dropdown-select";
import {IconPack as Icon} from "helpers/IconPack";
import { LOCATION_OPTIONS } from "constants";
import cl from "styles/LocationFilter.module.css";

const LocationFilter = ({ onChange, selectedFilters }) => {
  const isLocation = LOCATION_OPTIONS.find((option) =>
    option.value.includes(selectedFilters.location)
  );

  return (
    <div className={cl["location-filter"]}>
      <label className={cl.label}>
        Location
        <Select
          className={cl.dropdown}
          placeholder="Kyiv, Ukraine"
          options={LOCATION_OPTIONS}
          value={isLocation}
          onChange={(arr) => {
            if (arr.length > 0) {
              onChange({
                name: "location",
                value: arr[0].value,
                key: arr[0].key,
                checked: true,
              });
            }
          }}
          closeOnScroll={true}
          closeOnSelect={true}
          color="var(--accent-color)"
        />
        <Icon id="location" />
      </label>
    </div>
  );
};

export default LocationFilter;
