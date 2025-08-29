import style from "../styles/Logic/AudioPlayback.module.scss";
import {useContext} from "react";
import {SongContext} from "../context/SongContext.jsx";

//this is the audio file which has the music being controlled by ref to not rerender on every state update
function AudioPlayback () {

    const {audioRef, song, volume, volumeSlide} = useContext(SongContext);

    return (
        <>
        <div className={style.container}>
            <audio
                ref={audioRef}
                src={song ?? undefined}
                autoPlay
                controls={false}
                muted = {!volume || volumeSlide === 0}
            />
        </div>
        </>
    )
}

export default AudioPlayback;