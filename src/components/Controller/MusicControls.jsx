import style from "../../styles/Controller/MusicControls.module.scss";
import Progressbar from "./Progressbar.jsx";

function MusicControls() {
    return (
        <>
            <div className={style.musicControls}>
                <Progressbar />
            </div>
        </>
    )
}

export default MusicControls;