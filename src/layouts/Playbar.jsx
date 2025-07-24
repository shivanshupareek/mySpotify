import style from './Playbar.module.scss';

function Playbar() {
    return (
        <>
            <article className={style.playbar_main}>
                <div className={style.div_main}>
                    <h1>This is the bottom playbar</h1>
                </div>
            </article>
        </>
    )
}

export default Playbar;