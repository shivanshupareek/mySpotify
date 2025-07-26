import style from "../../styles/Controller/MusicExtras.module.scss";
import IconFunction from "../../logic/IconFunction.jsx";
import {
    playing_view,
    mike,
    queue,
    connect_device,
    volume_min,
    mute
} from "../../assets/svg.js";
import {useState} from "react";

function MusicExtras() {

    const [volume, setVolume] = useState(true);
    const [volumeSlide, setVolumeSlide] = useState(50);

    function handleVolumeSlide(e) {
        setVolumeSlide(Number(e.target.value));
    }

    return (
        <>
            <div className={style.musicExtra}>
                <div className={style.playingView}>
                    <IconFunction className="playingViewIcon" label="Now playing view" path={playing_view} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.mike}>
                    <IconFunction className="mikeIcon" label="Lyrics" path={mike} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.queue}>
                    <IconFunction className="queueIcon" label="Queue" path={queue} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.connectDevice}>
                    <IconFunction className="connectDeviceIcon" label="Connect to a device" path={connect_device} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.volumeControl}>
                    <div className={style.volume} onClick={() => {setVolume(p => !p)}} >
                        <IconFunction
                            className={volume ? "unmute" : "mute"}
                            label={volume ? "mute" : "Unmute"}
                            path={volume ? volume_min : mute}
                            width={20}
                            height={20}
                            hColor={"#ffffff"}
                            color={"#b3b3b3"}
                        />
                    </div>
                    <div className={style.volumeSliderWrapper}>
                        <input
                            className={style.slider}
                            type="range"
                            value={volumeSlide}
                            onClick={handleVolumeSlide}
                            min="0"
                            max="100"
                            style={{"--slider": `${volumeSlide}%`}}
                        />
                        <span className="volumeText">{volumeSlide}%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicExtras;