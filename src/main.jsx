import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Loader from "./components/Loader.jsx";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Loader />
    <App />
  </StrictMode>
);
