import style from "../styles/Navbar.module.scss";
import NavIcon from "../components/NavIcon";
import NavCentre from "../components/NavCentre";

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <main className={style.main}>
          <section className={style.section}>
            <NavIcon />
            <NavCentre />
          </section>
        </main>
      </nav>
    </>
  );
}

export default Navbar;
