import style from "../styles/Icon.module.scss";

function Icon({ width = 24, height = 24, color = "#ffffff", path, ...props }) {
  return (
    <>
      <main className={style.main}>
        <svg
          width={width}
          height={height}
          viewBox="0 0 23 23"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          {Array.isArray(path) ? (
            path.map((d, i) => <path key={i} d={d} />)
          ) : (
            <path d={path} />
          )}
        </svg>
      </main>
    </>
  );
}

export default Icon;
