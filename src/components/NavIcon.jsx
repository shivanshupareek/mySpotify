import style from "../styles/NavIcon.module.scss";
import Icon from "./Icon";

function NavIcon({ size, color, path }) {
  return (
    <>
      <main className={style.main}>
        <Icon path={path} size={size} color={color} />
      </main>
    </>
  );
}

export default NavIcon;
