import style from "../../styles/Nav/NavEnd.module.scss";
import Icon from "../../logic/Icon.jsx";
import { download, notify, friend_activity, account } from "../../../public/assets/svg.js";
import {useContext} from "react";
import {SongContext} from "../../context/SongContext.jsx";
import IconFunction from "../../logic/IconFunction.jsx";

function NavEnd() {
    const {onInstallHover, setOnInstallHover} = useContext(SongContext);

  return (
    <>
      <main className={style.main}>
        <div className={style.installAppIcon}>
            <div className={style.installApp}
                 onMouseEnter={() => setOnInstallHover(true)}
                 onMouseLeave={() => setOnInstallHover(false)}
            >
              <Icon path={download} width={14} height={14} color={onInstallHover ? "#ffffff" : "#B3B3B3"} />
              <p className={style.installText} style={onInstallHover ? {color: "#ffffff"} : {color: "#b3b3b3"}} >Install app</p>
            </div>
        </div>
          <IconFunction className="notifyIcon" label="What's new" path={notify} width={18} height={18} hColor={"#ffffff"} color={"#b3b3b3"}/>
          <IconFunction className="activityIcon" label="Firend Activity" path={friend_activity} width={22} height={15} hColor={"#ffffff"} color={"#b3b3b3"}/>
        <div className={style.accountIcon}>
            <IconFunction label={"Account"} path={account} width={24} height={24} color={"#ffffff"}/>
        </div>
      </main>
    </>
  );
}

export default NavEnd;
