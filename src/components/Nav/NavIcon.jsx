import style from "../../styles/Nav/NavIcon.module.scss";
import Icon from "../../logic/Icon.jsx";
import { primary_spotify_logo } from "../../../public/assets/svg.js";

function NavIcon() {
  return (
    <>
      <main className={style.main}>
        <Icon
          path={primary_spotify_logo}
          width={32}
          height={32}
          color="#ffffff"
        />
      </main>
    </>
  );
}

export default NavIcon;
