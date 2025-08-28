import {createContext, useRef, useState, useMemo} from "react";
// import songFile from "../../public/assets/song.mp3";

export const SongContext = createContext(undefined);

const SongProvider = ({ children }) => {

    const songFile = "/assets/song.mp3"
    const [song, setSong] = useState(songFile);

    //this is for MusicExtra.jsx
    const audioRef = useRef(null);              //for audio to not render on every state update
    const [isPlaying, setIsPlaying] = useState(false); //for playing view icon
    const [volume, setVolume] = useState(true);        //for volume
    const [volumeSlide, setVolumeSlide] = useState(0); //this function handles the volume of the volume slider

    //this is for CenterControls.jsx
    const [play, setPlay] = useState(false); //for play pause toggle button

    //this is for Main.jsx
    const isResizingRef = useRef(false); //this is for the responsive value
    const sidebarRef = useRef(null);        //this is for ref state of the library

    //this is for NavEnd.jsx
    const [onInstallHover, setOnInstallHover] = useState(false);

    //this is for IconFunction.jsx
    const [isHover, setIsHover] = useState(false);



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