import style from "../styles/Icon.module.scss";

function Icon({ size = 24, color = "ffffff", path, ...props }) {
  return (
    <>
      <main className={style.main}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 23 23"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path d={path} />
        </svg>
      </main>
    </>
  );
}

export default Icon;
