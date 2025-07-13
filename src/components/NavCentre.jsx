import style from "../styles/NavCentre.module.scss";
import Icon from "./Icon";
import { home } from "../assets/svg";

function NavCentre() {
  return (
    <>
      <main className={style.main}>
        <section className={style.Icon}>
          <div className={style.homeIcon}>
            <Icon path={home} width={22} height={24} color="#ffffff" />
          </div>
          <span className={style.tooltip}>Home</span>
        </section>

        <section className={style.search}></section>
      </main>
    </>
  );
}

export default NavCentre;
