import style from "../../styles/Controller/MusicControls.module.scss";
import Progressbar from "./Progressbar.jsx";
import CenterControls from "./CenterControls.jsx";

function MusicControls({ song }) {
    
    return (
        <>
            <div className={style.music_controls}>
                <div className={style.centerControls}>
                    <CenterControls song={song} />
                </div>
                <div className={style.progressbar}>
                    <Progressbar song={song} />
                </div>
            </div>
        </>
    )
}

export default MusicControls;