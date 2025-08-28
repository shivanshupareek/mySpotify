import style from "../../styles/Nav/SearchBar.module.scss";
import IconFunction from "../../logic/IconFunction.jsx";
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
            <IconFunction  label={"Search"} path={search} width={22} height={22} color={"#B3B3B3"} />
        </div>
        <div className={style.browseIcon}>
            <IconFunction label={"Browse"} path={browse} width={24} height={24} color="#B3B3B3" />
        </div>
      </main>
    </>
  );
}

export default Searchbar;