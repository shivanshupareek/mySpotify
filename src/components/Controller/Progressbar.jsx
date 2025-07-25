import style from "../../styles/Controller/Progressbar.module.scss";

function Progressbar() {
    return (
        <>
            <div className={style.pbContainer}>
                <div className={style.timeOver}>
                    <p>-:--</p>
                </div>
                <div className={style.progressbar}>
                    <div className={style.progressbarBg}>
                        <div className={style.progressbarFilled}></div>
                        <div className={style.progressbarThumb}></div>
                    </div>
                </div>
                <div className={style.timeLeft}>
                    <p>-:--</p>
                </div>
            </div>
        </>
    )
}

export default Progressbar;