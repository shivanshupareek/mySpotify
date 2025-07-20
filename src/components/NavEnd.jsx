import style from "../styles/NavEnd.module.scss";
import Tooltip from "../logic/Tooltip";
import Icon from "../logic/Icon";
import { download, notify, friend_activity, account } from "../assets/svg";

function NavEnd() {
  return (
    <>
      <main className={style.main}>
        <div className={style.downloadIcon}>
          <Tooltip label="Install app">
            <div className={style.download}>
              <Icon path={download} width={16} height={16} color="#B3B3B3" />
              <p className={style.installText}>Install app</p>
            </div>
          </Tooltip>
        </div>
        <div className={style.notifyIcon}>
          <Tooltip label="What's new">
            <Icon path={notify} width={24} height={24} color="#B3B3B3" />
          </Tooltip>
        </div>
        <div className={style.activityIcon}>
          <Tooltip label="Friend Activity">
            <Icon
              path={friend_activity}
              width={24}
              height={17}
              color="#B3B3B3"
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
