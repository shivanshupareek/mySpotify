import {createContext, useRef, useState, useMemo} from "react";

export const SongContext = createContext(undefined);

const SongProvider = ({ children }) => {

    const songFile = "/assets/song.mp3"
    const [song, setSong] = useState(songFile); //For the song which is being used as a default

    //For MusicExtra.jsx
    const audioRef = useRef(null);              //For audio to not render on every state update
    const [isPlaying, setIsPlaying] = useState(false); //For playing view icon
    const [volume, setVolume] = useState(true);        //For volume
    const [volumeSlide, setVolumeSlide] = useState(0); //this function handles the volume of the volume slider

    //For CenterControls.jsx
    const [play, setPlay] = useState(false); //for play pause toggle button

    //For Main.jsx
    const isResizingRef = useRef(false); //For the responsive value
    const sidebarRef = useRef(null);        //For ref state of the library

    //For NavEnd.jsx
    const [onInstallHover, setOnInstallHover] = useState(false);

    //For IconFunction.jsx
    const [isHover, setIsHover] = useState(false);

    //For CenterControls.jsx
    const [currentTrackTime, setCurrentTrackTime] = useState(0);
    const [trackSlider, setTrackSlider] = useState(0);


    //useMemo is being used from re-rendering states which have no updates to save unnecessary re-renders
    const data = useMemo( //used memo for caching as a lot of data is being computed in a single render
        () => ({
            song, setSong,
            audioRef,
            isPlaying, setIsPlaying,
            volume, setVolume,
            volumeSlide, setVolumeSlide,
            play, setPlay,
            isResizingRef, sidebarRef,
            onInstallHover, setOnInstallHover,
            isHover, setIsHover,
            currentTrackTime, setCurrentTrackTime,
            trackSlider, setTrackSlider,
    }),
        [song, isPlaying, volume, play, volumeSlide]
    );

    return (
        <>
            <SongContext.Provider value={data}>
                {children}
            </SongContext.Provider>

        </>
    )

}

export default SongProvider;