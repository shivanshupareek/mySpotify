import style from  "../styles/IconFunction.module.scss"
import {useState} from "react";
import Icon from "./Icon.jsx";
import Tooltip from "./Tooltip.jsx";

function IconFunction({
                          label,
                          path,
                          width,
                          height,
                          hColor,
                          color,
                          onClick,
                          className,
                        }) {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div
                className={style[className]}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                {...(onClick && {onClick})}
            >
                <Tooltip label={label}>
                    <Icon
                        path={path}
                        width={width}
                        height={height}
                        color={isHover ? hColor : color}
                    />
                </Tooltip>
            </div>
        </>
    )
}

export default IconFunction;