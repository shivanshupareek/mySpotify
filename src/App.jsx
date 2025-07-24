import style from "./styles/App.module.scss";
import "./styles/partials/_global.scss";
import Navbar from "./layouts/Navbar";
import Library from "./layouts/Library.jsx";
import View from "./layouts/View.jsx";
import Playbar from "./layouts/Playbar.jsx";

function App() {
  return (
    <>
      <main className={style.main}>
          <Navbar />
          <Library />
          <View />
          <Playbar />
      </main>
    </>
  );
}

export default App;
