import style from "../styles/NavIcon.module.scss";
import Icon from "./Icon";

function NavIcon({ width, height, color, path }) {
  return (
    <>
      <main className={style.main}>
        <Icon path={path} width={width} height={height} color={color} />
      </main>
    </>
  );
}

export default NavIcon;
