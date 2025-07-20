import style from "./styles/App.module.scss";
import "./styles/partials/_global.scss";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <>
      <main className={style.main}>
        <Navbar />
      </main>
    </>
  );
}

export default App;
