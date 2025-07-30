import style from "../../styles/Controller/MusicControls.module.scss";
import Progressbar from "./Progressbar.jsx";
import CenterControls from "./CenterControls.jsx";
// import {useRef, useState, useEffect} from "react";

function MusicControls() {
    
    // const audioRef = useRef("null");
    // const [isPlaying, serIsPlaying] = useState(false);
    // const [isEnabled, setIsEnabled] = useState(false);
    
    // function togglePlayPause() {
    //     const audio = audio.current;
    //     if (!audio) return ("");
    //
    //     if (audio.current) {
    //        setIsPlaying(true)
    //         setIsEnabled(true)
    //     };
    // };

    
    return (
        <>
            <div className={style.music_controls}>
                {/*<audio */}
                {/*    className{style.audio} */}
                {/*    src="/assets/song.mp3"*/}
                {/*    ref{audioRef}*/}
                {/*/>*/}
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