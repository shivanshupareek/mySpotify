import style from "../styles/NavIcon.module.scss";
// import Tooltip from "../logic/Tooltip";
import Icon from "../logic/Icon";
import { primary_spotify_logo } from "../assets/svg";

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
