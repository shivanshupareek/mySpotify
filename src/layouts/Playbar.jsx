import style from '../styles/Footer/Playbar.module.scss';
import {shuffle,previous, next, playbar_controls_play, playbar_controls_pause, repeat} from "../assets/svg.js";
import {useState} from "react";
import IconFunction from "../logic/IconFunction.jsx";

function Playbar() {

    const [play, setPlay] = useState(false)

    return (
        <>
            <footer className={style.playbar_main}>
                <div className={style.div_main}>
                    <div className={style.music_player}></div>
                    <div className={style.music_controls}>
                        <div className={style.controls}>
                            <IconFunction className="shuffle" label="shuffle" path={shuffle} width={22} height={22} hColor={"#ffffff"} color={"#b3b3b3"}/>
                            <IconFunction className="previous" label="Previous" path={previous} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                            <div className={style.playPause} onClick={() => {setPlay(prev => !prev)}}>
                                <IconFunction
                                    className={play ? "play" : "pause"}
                                    label={play ? "Footer" : "Pause"}
                                    path={play ? playbar_controls_play : playbar_controls_pause}
                                    width={32}
                                    height={32}
                                    hColor={"#ffffff"}
                                    color={"#b3b3b3"}
                                />
                            </div>
                            <IconFunction className="next" label="Next" path={next} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                            <IconFunction className="repeat" label="Repeat" path={repeat} width={18} height={18} hColor={"#ffffff"} color={"#b3b3b3"}/>
                        </div>
                    </div>
                    <div className={style.music_extras}></div>
                </div>
            </footer>
        </>
    )
}

export default Playbar;