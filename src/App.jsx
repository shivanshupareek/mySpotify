import style from "./styles/App.module.scss"
import "./styles/partials/_global.scss";
import Navbar from "./layouts/Navbar.jsx";
import Library from "./layouts/Library.jsx";
import View from "./layouts/View.jsx";
import Playbar from "./layouts/Playbar.jsx";

function App() {
  return (
    <>
      <main className={style.main}>
          <div className={style.navbar}>
              <Navbar />
          </div>

          <div className={style.library}>
             <Library />
          </div>

          <div className={style.view}>
            <View />
          </div>

          <div className={style.playbar}>
            <Playbar />
          </div>

      </main>
    </>
  );
}

export default App;
