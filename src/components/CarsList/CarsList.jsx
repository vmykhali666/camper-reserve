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
    const hasMoreVehicles = data?.vehicles.length < data?.total;

    return (
      <>
        <ul className={cl["vehicles-list"]}>
          {data?.vehicles.length ? (
            data?.vehicles?.map((vehicle) => (
              <CarCard key={vehicle._id} vehicle={vehicle} />
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
