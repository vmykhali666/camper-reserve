import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import { StateContext } from "context/StateContext";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "reduxFiles/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/camper-reserve">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StateContext>
          <App />
        </StateContext>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
