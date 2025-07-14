import style from "../styles/NavCentre.module.scss";
import Icon from "./Icon";
import { home } from "../assets/svg";
import Tooltip from "./Tooltip";
import Searchbar from "../components/SearchBar";

function NavCentre() {
  return (
    <>
      <main className={style.main}>
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

        <section className={style.search}></section>
      </main>
    </>
  );
}

export default NavCentre;
