import style from "../styles/Navbar.module.scss";
import NavIcon from "../components/NavIcon";
import NavCentre from "../components/NavCentre";
import NavEnd from "../components/NavEnd";

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <main className={style.main}>
          <section className={style.section}>
            <NavIcon />
            <NavCentre />
            <NavEnd />
          </section>
        </main>
      </nav>
    </>
  );
}

export default Navbar;
