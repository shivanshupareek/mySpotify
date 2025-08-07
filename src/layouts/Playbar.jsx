import style from '../styles/Controller/Playbar.module.scss';
import MusicControls from "../components/Controller/MusicControls.jsx";
import MusicPlayer from "../components/Controller/MusicPlayer.jsx";
import MusicExtras from "../components/Controller/MusicExtras.jsx";
import song from "/assets/song.mp3";

function Playbar() {

    return (
        <>
            <footer className={style.playbar_main}>
                <div className={style.div_main}>
                    <div className={style.music_player}>
                        <MusicPlayer song={song} />
                    </div>
                    <div className={style.music_controls}>
                        <MusicControls song={song} />
                    </div>
                    <div className={style.music_extras}>
                        <MusicExtras song={song}/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Playbar;