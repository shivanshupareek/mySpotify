import style from "./styles/App.module.scss";
import "./styles/_global.scss";
// import add from "./assets/add.svg";
// import connectDevice from "./assets/connect_device.svg";

function App() {
  return (
    <>
      <div className={style.div}>
        <h1>Hello, World!</h1>
        {/* <img src={add} alt="addition button" />
        <img src={connectDevice} alt="icon for connecting devices" /> */}
      </div>
    </>
  );
}

export default App;
