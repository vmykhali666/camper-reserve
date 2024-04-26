import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "reduxFiles/cars";
import ReserveForm from "components/ReserveForm/ReserveForm";
import {IconPack} from "helpers/IconPack";
import Button from "components/Button/Button";
import { DETAILS } from "constants";
import cl from "styles/Features.module.css";

const Features = function () {
  const { id } = useParams();

  const { data: carDetails } = useGetCarByIdQuery(id);

  return (
    <div className={cl["features-container"]}>
      <div className={cl["features-wrapper"]}>
        <ul className={cl["features-list"]}>
          {Object.entries(carDetails.details).map(([key, value]) => {
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
          })}
        </ul>

        <div>
          <p className={cl.title}>Vehicle details</p>
          <ul className={cl["details-list"]}>
            {DETAILS.map((details) => (
              <li key={details} className={cl["details-item"]}>
                <p className={cl["details-name"]}>
                  {details.charAt(0).toUpperCase() + details.slice(1)}
                </p>
                <p className={cl["details-value"]}>
                  {carDetails[details]
                    ? carDetails[details]
                    : "unknown"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ReserveForm />
    </div>
  );
};

export default Features;
