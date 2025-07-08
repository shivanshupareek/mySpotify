import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import style from "./styles/Index.module.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <div className={style.div}>
        <App />
      </div>
    </>
  </StrictMode>
);
