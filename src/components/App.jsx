import { lazy } from "react";
import { Route, Routes } from "react-router";
import { useLocation } from "react-router-dom";
import { Layout } from "layout/Layout";
import Modal from "components/Modal/Modal";

export const App = () => {
  const Home = lazy(() => import("pages/Home/Home"));
  const Favorites = lazy(() => import("pages/Favorites/Favorites"));
  const Catalog = lazy(() => import("pages/Catalog/Catalog"));
  const Features = lazy(() => import("components/Features/Features"));
  const Reviews = lazy(() => import("components/Reviews/Reviews"));

  const location = useLocation();

  if (
    location.pathname.includes("/catalog/cars") ||
    location.pathname.includes("/favorites/cars")
  ) {
    document.body.classList.add("lock");
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog/>}>
          <Route path="cars/:id" element={<Modal />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="favorites" element={<Favorites />}>
          <Route path="cars/:id" element={<Modal />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Home />} />
    </Routes>
  );
};
