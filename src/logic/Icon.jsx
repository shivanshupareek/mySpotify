import style from "../styles/Icon.module.scss";
import {useRef, useEffect, useState} from "react";

function Icon({ width = 24, height = 24, color = "#ffffff", path, ...props }) {
    const pathRef = useRef(null)
    const [viewBox, setViewBox] = useState("0 0 24 24");

   useEffect(() => {
       if(pathRef.current) {
           const bbox = pathRef.current.getBBox();
           const padding = 1;
           setViewBox(`${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`)
       }
   }, [path]);

  return (
    <>
      <main className={style.main}>
        <svg
          width={width}
          height={height}
          viewBox={viewBox}
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio = "xMidYMid meet"

          {...props}
            className={style.icon}
        >
          {Array.isArray(path) ? (
            path.map((d, i) => <path key={i} d={d} ref={ i === 0 ? pathRef : null}/>)
          ) : (
            <path d={path} ref={pathRef} className={style.iconPath} />
          )}
        </svg>
      </main>
    </>
  );
}

export default Icon;
