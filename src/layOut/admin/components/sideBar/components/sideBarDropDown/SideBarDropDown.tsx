import { faMoon, faUserCog, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeMode } from "../../../../../../store/slices/darkAndLightMode/darkAndLightMode"
import { changeUserName } from "../../../../../../store/slices/userInfo/userInfo"
import DisabledItem from "../disabledItem/DisabledItem"
import styles from './SideBarDropDown.module.scss'
import DropDownEditItem from "./components/dropDownEditItem/DropDownEditItem"
import DropDownSelectItem from "./components/dropDownSelectItem/DropDownSelectItem"

type SideBarDropDownProps = {
    disabled?: boolean,
    itemName: string,
    itemIcon: IconDefinition,
    iconColor?: string,
}

export default function SideBarDropDown({ disabled, itemName, itemIcon, iconColor }: SideBarDropDownProps) {
    // redux
    const dispatch = useDispatch()
    const username = useSelector(store => store.userInfo.username)
    const mode = useSelector(store => store.darkAndLightMode.mode)



    // state
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)

    return (
        <>
            {!disabled ?
                <>
                    <li className={mode === 'darkMode' ? styles.sidebarItem : styles.lightModeSidebarItem} id={isDropDownOpen && mode === 'darkMode' ? styles.focused : isDropDownOpen && mode === 'lightMode' ? styles.lightModeFocused : ''} onClick={() => { setIsDropDownOpen(prev => !prev) }}>
                        <span className={styles.iconContainer}>
                            <FontAwesomeIcon icon={itemIcon} style={{ color: iconColor }} />
                        </span>
                        <span className={styles.itemNameContainer}>
                            {itemName}
                        </span>
                    </li>
                    {isDropDownOpen &&
                        <ul className={mode === 'darkMode' ? styles.dropDownContainer : styles.lightModeDropDownContainer}>
                            <DropDownEditItem itemName={'username'} icon={faUserCog} inputValue={username} onAlter={(value: string) => { dispatch(changeUserName(value)) }} />
                            <DropDownSelectItem icon={faMoon} selectFunc={(val) => { dispatch(changeMode(val)) }} selectOptions={[{ val: 'darkMode', name: 'dark' }, { val: 'lightMode', name: 'light' }]} itemName={mode} />
                        </ul>}
                </>
                :
                <DisabledItem itemIcon={itemIcon} itemName={itemName} iconColor={iconColor} />
            }
        </>
    )
}
