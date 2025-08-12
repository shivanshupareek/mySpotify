
import {shuffle,previous, next, playbar_controls_play, playbar_controls_pause, repeat} from "../../../public/assets/svg.js";
import {useContext} from "react";
import {SongContext} from "../../hooks/songContext.jsx";
import IconFunction from "../../logic/IconFunction.jsx"
import style from "../../styles/Controller/CenterControls.module.scss";

function CenterControls() {

        const { play, setPlay } = useContext(SongContext);

    return (
        <>
            <div className={style.controls}>
                <IconFunction className="shuffle" label="shuffle" path={shuffle} width={22} height={22} hColor={"#ffffff"} color={"#b3b3b3"}/>
                <IconFunction className="previous" label="Previous" path={previous} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                <div className={style.playPause} onClick={() => {setPlay(prev => !prev)}}>
                    <IconFunction
                        className={play ? "play" : "pause"}
                        label={play ? "Play" : "Pause"}
                        path={play ? playbar_controls_play : playbar_controls_pause}
                        width={36}
                        height={36}
                        hColor={"#ffffff"}
                        color={"#b3b3b3"}
                    />
                </div>
                <IconFunction className="next" label="Next" path={next} width={20} height={20} hColor={"#ffffff"} color={"#b3b3b3"}/>
                <IconFunction className="repeat" label="Repeat" path={repeat} width={18} height={18} hColor={"#ffffff"} color={"#b3b3b3"}/>
            </div>
        </>
    )
}

export default CenterControls;