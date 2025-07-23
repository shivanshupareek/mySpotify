import style from "../styles/NavEnd.module.scss";
import Tooltip from "../logic/Tooltip";
import Icon from "../logic/Icon";
import { download, notify, friend_activity, account } from "../assets/svg";
import {useState} from "react";

function NavEnd() {
  const [onInstallHover, setOnInstallHover] = useState(false);
  const [onNotifyHover, setOnNotifyHover] = useState(false);
  const [onActivityHover, setOnActivityHover] = useState(false);
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
        <div className={style.notifyIcon}
             onMouseEnter={() => setOnNotifyHover(true)}
             onMouseLeave={() => setOnNotifyHover(false)}
        >
          <Tooltip label="What's new">
            <Icon path={notify} width={18} height={20} color={onNotifyHover ? "#ffffff" : "#B3B3B3"} />
          </Tooltip>
        </div>
        <div className={style.activityIcon}
             onMouseEnter={() => setOnActivityHover(true)}
             onMouseLeave={() => setOnActivityHover(false)}
        >
          <Tooltip label="Friend Activity">
            <Icon
              path={friend_activity}
              width={22}
              height={15}
              color={ onActivityHover ? "#ffffff" : "#B3B3B3"}
            />
          </Tooltip>
        </div>
        <div className={style.accountIcon}>
          <Tooltip label="Account">
            <Icon path={account} width={24} height={24} color="#ffffff" />
          </Tooltip>
        </div>
      </main>
    </>
  );
}

export default NavEnd;
