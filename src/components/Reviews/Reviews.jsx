import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import ReserveForm from "components/ReserveForm/ReserveForm";
import { useGetCarByIdQuery } from "reduxFiles/cars";
import cl from "styles/Reviews.module.css";

const Reviews = function () {
  const { id } = useParams();

  const { data: carDetails } = useGetCarByIdQuery(id);

  return (
    <div className={cl["reviews-container"]}>
      <div className={cl["reviews-wrapper"]}>
        <ul className={cl["reviews-list"]}>
          {carDetails?.reviews.length ? (
            carDetails?.reviews.map(
              ({ reviewer_name, reviewer_rating, comment }, index) => {
                return (
                  <li key={index} className={cl["review-item"]}>
                    <div className={cl["review-wrapper"]}>
                      <div className={cl.avatar}>{reviewer_name.charAt(0)}</div>
                      <div className={cl.name}>
                        <p>{reviewer_name}</p>
                        <Rating
                          readonly
                          initialValue={reviewer_rating}
                          size={20}
                        />
                      </div>
                    </div>
                    <p className={cl.comment}>{comment}</p>
                  </li>
                );
              }
            )
          ) : (
            <p>No reviews yet</p>
          )}
        </ul>
      </div>
      <ReserveForm />
    </div>
  );
};

export default Reviews;
