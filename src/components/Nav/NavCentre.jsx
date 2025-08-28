import style from "../../styles/Nav/NavCentre.module.scss";
import { home } from "../../../public/assets/svg.js";
import IconFunction from "../../logic/IconFunction.jsx";
import Searchbar from "./SearchBar.jsx";

function NavCentre() {
  return (
    <>
      <main className={style.navCentreMain}>
        <div className={style.homeIcon}>
            <IconFunction label={"Home"} path={home} width={22} height={22} color="#ffffff" />
        </div>
        <div className={style.searchbar}>
          <Searchbar />
        </div>
      </main>
    </>
  );
}

export default NavCentre;
