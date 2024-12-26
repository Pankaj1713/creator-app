import React from "react";
import Router from "./router";
import { ToastContainer, Zoom } from "react-toastify";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@material-tailwind/react";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  position: "top-center",
  autoClose: 3500,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Zoom,
};

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
          <ToastContainer {...toastConfig} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
