import style from "../styles/Library/Library.module.scss";

function Library() {
    return (
        <>
         <aside className={style.library_main}>
             <div className={style.div_main}>
                 <h1>This is the side library</h1>
             </div>
         </aside>
        </>
    )
}

export default Library;