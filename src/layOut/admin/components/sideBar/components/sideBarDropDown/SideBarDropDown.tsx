import { faUserCog, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeUserName } from "../../../../../../store/slices/userInfo/userInfo"
import DisabledItem from "../disabledItem/DisabledItem"
import styles from './SideBarDropDown.module.scss'
import DropDownEditItem from "./components/dropDownEditItem/DropDownEditItem"

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


    // state
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)

    return (
        <>
            {!disabled ?
                <>
                    <li className={styles.sidebarItem} id={isDropDownOpen ? styles.focused : ''} onClick={() => { setIsDropDownOpen(prev => !prev) }}>
                        <span className={styles.iconContainer}>
                            <FontAwesomeIcon icon={itemIcon} style={{ color: iconColor }} />
                        </span>
                        <span className={styles.itemNameContainer}>
                            {itemName}
                        </span>
                    </li>
                    {isDropDownOpen &&
                        <ul className={styles.dropDownContainer}>
                            <DropDownEditItem itemName={'username'} icon={faUserCog} inputValue={username} onAlter={(value: string) => { dispatch(changeUserName(value)) }} />
                        </ul>}
                </>
                :
                <DisabledItem itemIcon={itemIcon} itemName={itemName} iconColor={iconColor} />
            }
        </>
    )
}
