import Main from "./layouts/Main.jsx";
import { SongProvider } from "./hooks/songContext.jsx";

export default function App() {
    return (
        <>
            <SongProvider>
              <Main />;
            </SongProvider>
        </>
    )
};