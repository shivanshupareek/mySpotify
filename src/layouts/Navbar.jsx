import style from "../styles/Nav/Navbar.module.scss";
import NavIcon from "../components/Nav/NavIcon.jsx";
import NavCentre from "../components/Nav/NavCentre.jsx";
import NavEnd from "../components/Nav/NavEnd.jsx";

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
