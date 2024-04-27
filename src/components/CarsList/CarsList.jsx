import { useGetCarsQuery } from "reduxFiles/cars";
import { useStateContext } from "context/StateContext";
import CarCard from "components/CarCard/CarCard";
import Pagination from "components/Pagination/Pagination";
import cl from "styles/CarsList.module.css";

const CarsList = function () {
  const { searchParams } = useStateContext();
  const params = Object.fromEntries(searchParams.entries());

  const { data, error, isFetching, isError, isSuccess } =
    useGetCarsQuery(params);

  if (isFetching) {
    return <p>Loading</p>;
  }

  if (isSuccess) {
    const hasMoreVehicles = data?.cars.length < data?.total;

    return (
      <>
        <ul className={cl["cars-list"]}>
          {data?.cars.length ? (
            data?.cars?.map((car) => (
              <CarCard key={car._id} car={car} />
            ))
          ) : (
            <p>No matches found</p>
          )}

          {!hasMoreVehicles ? null : <Pagination total={data?.total} />}
        </ul>
      </>
    );
  }

  if (isError) {
    return <p>{error.error}</p>;
  }
};

export default CarsList;
