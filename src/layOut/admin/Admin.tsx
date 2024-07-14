import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from './Admin.module.scss';
import Header from "./components/header/Header";
import SideBar from "./components/sideBar/SideBar";

export default function Admin() {
  // state
  const [pageName, setPageName] = useState<string>('my day')

  return (
    <div className={styles.king}>

      <div className={styles.sideBarContainer}>
        <SideBar pageNameSetter={(value) => { setPageName(value) }} />
      </div>

      <div className={styles.outletAndHeaderContainer}>
        <div className={styles.headerContainer}>
          <Header pageName={pageName} />
        </div>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>

    </div>
  );
}
