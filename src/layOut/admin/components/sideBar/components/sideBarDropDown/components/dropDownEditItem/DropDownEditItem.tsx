import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from './DropDownEditItem.module.scss'

type DropDownEditItemProps = {
    itemName: string,
    icon: IconDefinition,
    inputValue: string,
    onAlter: (value: string) => void
}

export default function DropDownEditItem({ itemName, icon, inputValue, onAlter }: DropDownEditItemProps) {

    // state
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [inputText, setInputText] = useState<string>(inputValue)

    // func
    const editInputValueHandler = () => {
        setIsEditing(prev => !prev);
    }
    const saveInputValueHandler = () => {
        setIsEditing(prev => !prev);
        onAlter(inputText)
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
                        <button onClick={editInputValueHandler}>edit</button>
                    </span>
                </li>
                :
                <li className={styles.dropDownItem}>
                    <span className={styles.iconContainer}>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                    <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
                    <span className={styles.btnContainer}>
                        <button onClick={saveInputValueHandler}>save</button>
                    </span>
                </li>}
        </>
    )
}
