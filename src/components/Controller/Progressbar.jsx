import style from "../../styles/Controller/Progressbar.module.scss";
function Progressbar() {

    return (
        <>
            <div className={style.pbContainer}>
                <div className={style.timeOver}>
                    <p>-:--</p>
                </div>
                <div className={style.trackSlider}>
                </div>
                <div className={style.timeLeft}>
                    <p>-:--</p>
                </div>
            </div>
        </>
    )
}

export default Progressbar;