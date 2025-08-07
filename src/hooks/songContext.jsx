import {createContext, useState} from "react";

export const  SongContext = createContext(null)

export function SongProvider({ children }) {
    const [song, setSong] = useState(null);

    return (
        <>
            <SongContext.Provider value={{ song, setSong }}>
                {children}
            </SongContext.Provider>
        </>
    )
}

