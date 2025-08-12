import style from '../styles/Controller/Playbar.module.scss';
import MusicControls from "../components/Controller/MusicControls.jsx";
import MusicPlayer from "../components/Controller/MusicPlayer.jsx";
import MusicExtras from "../components/Controller/MusicExtras.jsx";

function Playbar() {

    return (
        <>
            <footer className={style.playbar_main}>
                <div className={style.div_main}>
                    <div className={style.music_player}>
                        <MusicPlayer />
                    </div>
                    <div className={style.music_controls}>
                        <MusicControls  />
                    </div>
                    <div className={style.music_extras}>
                        <MusicExtras />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Playbar;