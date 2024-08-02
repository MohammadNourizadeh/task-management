import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";
import styles from './styles/Admin.module.scss';

export default function Admin() {
  // redux
  const mode = useSelector(store => store.darkAndLightMode.mode)

  // state
  const [pageName, setPageName] = useState<string>('my day')
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  return (
    <div className={styles.king} id={mode === 'lightMode' ? styles.lightMode : ''}>

      <div className={styles.sideBarContainer} id={isSideBarOpen ? styles.openSideBarContainer : ''}>
        <SideBar pageNameSetter={(value) => { setPageName(value) }} onClose={(value) => { setIsSideBarOpen(value) }} />
      </div>

      <div className={styles.outletAndHeaderContainer}>
        <div className={styles.headerContainer}>
          <button className={styles.sideBarBtn} onClick={() => { setIsSideBarOpen(true) }}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Header pageName={pageName} />
        </div>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>

    </div>
  );
}
