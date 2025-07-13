import style from "../styles/NavCentre.module.scss";
import Icon from "./Icon";
import { home } from "../assets/svg";
import Tooltip from "./Tooltip";

function NavCentre() {
  return (
    <>
      <main className={style.main}>
        <Tooltip label="Home">
          <div className={style.homeIcon}>
            <Icon path={home} width={22} height={24} color="#ffffff" />
            {/* <span className={style.tooltip}>Home</span> */}
          </div>
        </Tooltip>

        <section className={style.search}></section>
      </main>
    </>
  );
}

export default NavCentre;
