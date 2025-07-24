import style from '../styles/Playbar.module.scss';

function Playbar() {
    return (
        <>
            <footer className={style.playbar_main}>
                <div className={style.div_main}>
                    {/*<h1>This is the bottom playbar</h1>*/}
                    <div className={style.music_player}></div>
                    <div className={style.music_controls}>
                        <div className={style.controls}></div>
                        <div className={style.progressbar}></div>
                    </div>
                    <div className={style.music_extras}></div>
                </div>
            </footer>
        </>
    )
}

export default Playbar;