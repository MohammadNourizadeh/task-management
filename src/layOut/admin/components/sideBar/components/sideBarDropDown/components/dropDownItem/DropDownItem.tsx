import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from './DropDownItem.module.scss'

type DropDownItemProps = {
    itemName: string,
    icon: IconDefinition,
    onAlter: (value: string) => void
}

export default function DropDownItem({ itemName, icon, onAlter }: DropDownItemProps) {

    // state
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [inputText, setInputText] = useState<string>('')

    // func
    const editInputValueHandler = (presentValue: string) => {
        setIsEditing(prev => !prev);
        setInputText(presentValue)
    }
    const saveInputValueHandler = (changer: (value: string) => void) => {
        setIsEditing(prev => !prev);
        changer(inputText)
    }

    return (
        <>
            {!isEditing ?
                <li className={styles.dropDownItem}>
                    <span className={styles.iconContainer}>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <span className={styles.itemNameContainer}>
                        {itemName}
                    </span>
                    <span className={styles.btnContainer}>
                        <button onClick={() => { editInputValueHandler(itemName) }}>edit</button>
                    </span>
                </li>
                :
                <li className={styles.dropDownItem}>
                    <span className={styles.iconContainer}>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
                    <span className={styles.btnContainer}>
                        <button onClick={() => { saveInputValueHandler(onAlter) }}>save</button>
                    </span>
                </li>}
        </>
    )
}
