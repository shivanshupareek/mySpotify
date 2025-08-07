import style from "../../styles/Controller/MusicExtras.module.scss";
import IconFunction from "../../logic/IconFunction.jsx";
import {
    playing_view,
    mike,
    queue,
    connect_device,
    volume_min,
    mute,
    mini_player,
    fullScreen,
    volume_medium,
    volume_max
} from "../../../public/assets/svg.js"; //imports the paths for the svgs
import {useState, useRef, useEffect} from "react";

function MusicExtras({ song }) {

    const audioRef = useRef(null);              //for audio to not render on every state update
    const [isPlaying, setIsPlaying] = useState(false); //for playing view icon
    const [volume, setVolume] = useState(true);        //for volume
    const [volumeSlide, setVolumeSlide] = useState(0); //for slider

//this function handles the volume of the volume slider
    function handleVolumeSlide(e) {
        const vol = Number(e.target.value);
        setVolumeSlide(vol);
        if (audioRef.current) {
            audioRef.current.volume = vol / 100;
            audioRef.current.muted = vol === 0;
        }
    }

//this toggle function is for volume mute and unmute icon.
    function handleVolumeToggle() {
         const audio = audioRef.current;

         if (!audio) return

        if (volume) {
            setVolume(false);
            if (audioRef.current) audioRef.current.muted = true;
            if (audioRef.current.muted)  setVolumeSlide(0);
        } else {
            setVolume(true);
            if ( !volume || volumeSlide === 0) {
                const newVolume = 10;
                setVolumeSlide(newVolume);
                if (audioRef.current) audioRef.current.muted = false;
                audioRef.current.volume = newVolume/ 100;
            } else {
               if (audioRef.current) audioRef.current.muted = false;
            }
        }
    }

//this function is to render the correct path based on the volume on the slider.
    function volumeIcon () {
        if (volumeSlide === 0 || !volume) return mute;
        if (volumeSlide <= 30) return volume_min;
        if(volumeSlide <= 70) return volume_medium;
        return volume_max;
    }


//this useEffect() is to sync the audio's volume with the initial state during the mounting phase.
    useEffect(() => {
        if(audioRef.current) {
            audioRef.current.volume = 0;
        }
    }, [])


//this useEffect() is for the playing view icon to change color when there is a song being played.
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return "";

        const handlePlay = () => {setIsPlaying(true)};
        const handlePause = () => {setIsPlaying(false)}

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("pause", handlePause);

        setIsPlaying(!audio.paused);

        return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("pause", handlePause);
        }

    }, [])

    return (
        <>
            <div className={style.musicExtra}>
                <div className={style.playingView}>
                    {isPlaying ?
                        <IconFunction className="playingViewIcon" label="Now playing view" path={playing_view} width={16} height={16} hColor={"#1bd660"} color={"#1bd660"}/>
                        :
                        <IconFunction className="playingViewIcon" label="Now playing view" path={playing_view} width={16} height={16} hColor={"#ffffff"} color={"#b3b3b3"}/>
                    }
                </div>
                <div className={style.mike}>
                    <IconFunction className="mikeIcon" label="Lyrics" path={mike} width={16} height={16} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.queue}>
                    <IconFunction className="queueIcon" label="Queue" path={queue} width={16} height={16} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.connectDevice}>
                    <IconFunction className="connectDeviceIcon" label="Connect to a device" path={connect_device} width={16} height={16} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.volumeControl}>
                    <div className={style.volume} onClick={handleVolumeToggle} >
                        <IconFunction
                            className={volume ? "unmute" : "mute"}
                            label={volume ? "mute" : "Unmute"}
                            path={volumeIcon()}
                            width={16}
                            height={16}
                            hColor={"#ffffff"}
                            color={"#b3b3b3"}
                        />
                    </div>
                    <div className={style.volumeSliderWrapper}>
                        <audio
                            ref={audioRef}
                            src={song}
                            autoPlay
                            controls={false}
                            muted = {!volume || volumeSlide === 0}
                        />
                        <input
                            className={style.slider}
                            type="range"
                            value={volumeSlide}
                            onChange={handleVolumeSlide}
                            min="0"
                            max="100"
                            style={{"--slider": `${volumeSlide}%`}}
                        />
                        {/*<span className="volumeText">{volumeSlide}%</span>*/}
                    </div>
                </div>
                <div className={style.miniPlayer}>
                    <IconFunction className="miniplayerIcon" label="Open miniplayer" path={mini_player} width={16} height={16} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
                <div className={style.fullScreen}>
                    <IconFunction className="fullScreenIcon" label="Enter fullscreen" path={fullScreen} width={16} height={16} hColor={"#ffffff"} color={"#b3b3b3"}/>
                </div>
            </div>
        </>
    )
}

export default MusicExtras;
