import {createContext, useState} from "react";
import songFile from "../../public/assets/song.mp3";

export const SongContext = createContext({
    song: songFile,
});

const SongProvider = ({ children }) => {

    const [song, setSong] = useState('');
    // const song = songFile

    return (
        <>
            <SongContext.Provider value={{ song, setSong }} >
                {children}
            </SongContext.Provider>

        </>
    )

}

export default SongProvider;