import style from "../styles/Logic/Tooltip.module.scss";

function Tooltip({ label, children }) {
  return (
    <>
      <main className={style.wrapper}>
        {children}
        <span className={style.tooltip}>{label}</span>
      </main>
    </>
  );
}

export default Tooltip;
