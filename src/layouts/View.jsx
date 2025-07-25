import style from "../styles/View/View.module.scss";

function View () {
    return (
        <>
        <main className={style.view_main}>
            <div className={style.div_main}>
                <h1>This is the main view</h1>
            </div>
        </main>
        </>
    )
}

export default View;