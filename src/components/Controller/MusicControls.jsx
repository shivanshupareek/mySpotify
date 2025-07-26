import style from "../../styles/Controller/MusicControls.module.scss";
import Progressbar from "./Progressbar.jsx";
import CenterControls from "./CenterControls.jsx";

function MusicControls() {
    return (
        <>
            <div className={style.music_controls}>
                <div className={style.centerControls}>
                    <CenterControls />
                </div>
                <div className={style.progressbar}>
                    <Progressbar />
                </div>
            </div>
        </>
    )
}

export default MusicControls;