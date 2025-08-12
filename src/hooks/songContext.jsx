import {createContext, useRef, useState} from "react";
// import songFile from "../../public/assets/song.mp3";

export const SongContext = createContext("");

const SongProvider = ({ children }) => {

    const [song, setSong] = useState("/assets/song.mp3");

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


    return (
        <>
            <SongContext.Provider value={{
                song,
                setSong,
                audioRef,
                isPlaying,
                setIsPlaying,
                volume,
                setVolume,
                volumeSlide,
                setVolumeSlide,
                play,
                setPlay,
                isResizingRef,
                sidebarRef,
            }} >
                {children}
            </SongContext.Provider>

        </>
    )

}

export default SongProvider;