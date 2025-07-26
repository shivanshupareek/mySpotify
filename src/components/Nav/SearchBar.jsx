import style from "../../styles/Nav/SearchBar.module.scss";
import Tooltip from "../../logic/Tooltip.jsx";
import Icon from "../../logic/Icon.jsx";
import { search, browse } from "../../../public/assets/svg.js";

function Searchbar() {
  return (
    <>
      <main className={style.main}>
        <input
          title="search"
          type="search"
          className={style.input}
          name="search"
          placeholder="What do you want to play?"
        />
        <div className={style.searchIcon}>
          <Tooltip label="Search">
            <Icon path={search} width={22} height={22} color="#B3B3B3" />
          </Tooltip>
        </div>

        <div className={style.browseIcon}>
          <Tooltip label="Browse">
            <Icon path={browse} width={24} height={24} color="#B3B3B3" />
          </Tooltip>
        </div>
      </main>
    </>
  );
}

export default Searchbar;
