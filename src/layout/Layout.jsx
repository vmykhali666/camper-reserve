import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header } from "components/Header/Header";
import { Container } from "components/Container/Container";

export const Layout = function () {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
