import style from '../styles/Playbar.module.scss';
import Tooltip from "../logic/Tooltip.jsx";
import Icon from "../logic/Icon.jsx";
import {shuffle,previous, next, playbar_controls_play, playbar_controls_pause, repeat} from "../assets/svg.js";
import {useState} from "react";

function Playbar() {

    const [shuffleHover, setShuffleHover] = useState(false)
    const [previousHover, setPreviousHover] = useState(false)
    const [nextHover, setNextHover] = useState(false)
    const [playHover, setPlayHover] = useState(false)
    const [pauseHover, setPauseHover] = useState(false)
    const [repeatHover, setRepeatHover] = useState(false)
    const [play, setPlay] = useState(false)

    return (
        <>
            <footer className={style.playbar_main}>
                <div className={style.div_main}>
                    <div className={style.music_player}></div>
                    <div className={style.music_controls}>
                        <div className={style.controls}>
                            <div
                                className={style.shuffle}
                                onMouseEnter={() => setShuffleHover(true)}
                                onMouseLeave={() => setShuffleHover(false)}
                            >
                                <Tooltip label="Enable shuffle">
                                    <Icon path={shuffle}
                                          width={22}
                                          height={22}
                                          color={shuffleHover ? "#ffffff" : "#b3b3b3"}
                                    />
                                </Tooltip>
                            </div>
                            <div
                                className={style.previous}
                                onMouseEnter={() => setPreviousHover(true)}
                                onMouseLeave={() => setPreviousHover(false)}
                            >
                                <Tooltip label="Previous">
                                    <Icon
                                        path={previous}
                                        width={20} height={20}
                                        color={previousHover ? "#ffffff" : "#b3b3b3"}
                                    />
                                </Tooltip>
                            </div>
                            <div className={style.playPause}
                                 onClick={() => {setPlay(prev => !prev)}}
                            >
                                {play ?
                                    <div
                                        className={style.play}
                                        onMouseEnter={() => setPlayHover(true)}
                                        onMouseLeave={() => setPlayHover(false)}
                                    >
                                        <Tooltip label="Play">
                                            <Icon path={playbar_controls_play} width={32} height={32} color={playHover ? "#ffffff" : "#b3b3b3"} />
                                        </Tooltip>
                                    </div> :
                                    <div
                                        className={style.pause}
                                        onMouseEnter={() => setPauseHover(true)}
                                        onMouseLeave={() => setPauseHover(false)}
                                    >
                                        <Tooltip label="Pause">
                                            <Icon
                                                path={playbar_controls_pause}
                                                width={32}
                                                height={32}
                                                color={pauseHover ? "#ffffff" : "#b3b3b3"}
                                            />
                                        </Tooltip>
                                    </div>
                                }
                            </div>
                            <div
                                className={style.next}
                                onMouseEnter={() => setNextHover(true)}
                                onMouseLeave={() => setNextHover(false)}
                            >
                                <Tooltip label="Next">
                                    <Icon
                                        path={next}
                                        width={20}
                                        height={20}
                                        color={nextHover ? "#ffffff" : "#b3b3b3"}
                                    />
                                </Tooltip>
                            </div>
                            <div
                                className={style.repeat}
                                onMouseEnter={() => setRepeatHover(true)}
                                onMouseLeave={() => setRepeatHover(false)}
                            >
                                <Tooltip label=" Enable repeat">
                                    <Icon path={repeat} width={18} height={18} color={repeatHover ? "#ffffff" : "#b3b3b3"} />
                                </Tooltip>
                            </div>
                        </div>
                        <div className={style.progressbar}></div>
                    </div>
                    <div className={style.music_extras}></div>
                </div>
            </footer>
        </>
    )
}

export default Playbar;