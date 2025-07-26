import style from "../../styles/Nav/NavCentre.module.scss";
import Tooltip from "../../logic/Tooltip.jsx";
import Icon from "../../logic/Icon.jsx";
import { home } from "../../../public/assets/svg.js";
import Searchbar from "./SearchBar.jsx";

function NavCentre() {
  return (
    <>
      <main className={style.navCentreMain}>
        <div className={style.homeIcon}>
          <Tooltip label="Home">
            <div className={style.homeIcon}>
              <Icon path={home} width={22} height={24} color="#ffffff" />
            </div>
          </Tooltip>
        </div>
        <div className={style.searchbar}>
          <Searchbar />
        </div>

        {/*<section className={style.search}></section>*/}
      </main>
    </>
  );
}

export default NavCentre;
