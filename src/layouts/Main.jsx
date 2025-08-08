import style from "../styles/main.module.scss";
import Navbar from "../layouts/Navbar.jsx";
import Library from "../layouts/Library.jsx";
import View from "../layouts/View.jsx";
import Playbar from "../layouts/Playbar.jsx";
import { useRef } from "react";

export default function Main () {

    const isResizingRef = useRef(false); //this is for the responsive value
    const sidebarRef = useRef(null);        //this is for ref state of the library

    const startResizing = () => {
        isResizingRef.current = true;

        const handleMouseDown = (e) => {
            const resizing = isResizingRef.current;

            if (resizing) {
                const newWidth = e.clientX; //sets dynamic width on x-axis

                if (newWidth >= 100 && newWidth <= 400 ) {
                    sidebarRef.current.style.width = `${newWidth}px`;
                }

            }

        }

        //clean-up function
        const stopResizing = () => {
            isResizingRef.current  = false;
            window.removeEventListener("mousemove", handleMouseDown);
            window.removeEventListener("mouseup", stopResizing);
        }

        window.addEventListener("mousemove", handleMouseDown);
        window.addEventListener("mouseup", stopResizing);
    }


    return (
        <>
            <main className={style.main}>
                <div className={style.navbar}>
                    <Navbar />
                </div>

                <div className={style.library} ref={sidebarRef}>
                    <Library />
                </div>

                <div className={style.resizer} onMouseDown={startResizing}></div>

                <div className={style.view}>
                    <View />
                </div>

                <div className={style.playbar}>
                    <Playbar />
                </div>

            </main>
        </>
    );
}