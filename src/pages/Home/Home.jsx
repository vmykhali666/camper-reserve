import cl from "styles/Home.module.css";

const Home = function () {
  return (
    <section className={cl.section}>
      <div className={cl["content-wrapper"]}>
        <h1 className={cl.title}>The Camper Reservation</h1>
      </div>
    </section>
  )
};

export default Home;
