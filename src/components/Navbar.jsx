import style from "../styles/Navbar.module.scss";
import { primary_spotify_logo } from "../assets/svg";
import NavIcon from "./NavIcon";

function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <main className={style.main}>
          <section className={style.section}>
            <NavIcon
              path={primary_spotify_logo}
              width={32}
              height={32}
              color={"#ffffff"}
            />
          </section>
        </main>
      </nav>
    </>
  );
}

export default Navbar;
