import style from '../styles/Controller/Playbar.module.scss';
import CenterControls from "../components/Controller/CenterControls.jsx";
import Progressbar from "../components/Controller/Progressbar.jsx";

function Playbar() {

    return (
        <>
            <footer className={style.playbar_main}>
                <div className={style.div_main}>
                    <div className={style.music_player}></div>
                    <div className={style.music_controls}>
                        <CenterControls />
                        <Progressbar />
                    </div>
                    <div className={style.music_extras}></div>
                </div>
            </footer>
        </>
    )
}

export default Playbar;