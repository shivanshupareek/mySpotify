import style from "../../styles/Controller/Progressbar.module.scss";

function Progressbar() {
    return (
        <>
            <div className={style.pbContainer}>
                <div className={style.timeOver}></div>
                <div className={style.progressbar}>
                    <div className={style.progressbarBg}></div>
                    <div className={style.progressbarfilled}></div>
                    <div className={style.progressbarthumb}></div>
                </div>
                <div className={style.timeLeft}></div>
            </div>
        </>
    )
}

export default Progressbar;