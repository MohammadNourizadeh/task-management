import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from './DropDownItem.module.scss'

type DropDownItemProps = {
    itemInfo: ItemAmount
}
type ItemAmount = [{
    name: string,
    icon: IconDefinition,
    onAlter: (value: string) => void
}]

export default function DropDownItem({ itemInfo }: DropDownItemProps) {

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
            {itemInfo.map((item, index) => (
                <>
                    {!isEditing ?
                        <li className={styles.dropDownItem} key={index}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon icon={item.icon} />
                            </span>
                            <span className={styles.itemNameContainer}>
                                {item.name}
                            </span>
                            <span className={styles.btnContainer}>
                                <button onClick={() => { editInputValueHandler(item.name) }}>edit</button>
                            </span>
                        </li>
                        :
                        <li className={styles.dropDownItem}>
                            <span className={styles.iconContainer}>
                                <FontAwesomeIcon icon={item.icon} />
                            </span>
                            <input type="text" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />
                            <span className={styles.btnContainer}>
                                <button onClick={() => { saveInputValueHandler(item.onAlter) }}>save</button>
                            </span>
                        </li>}
                </>
            ))}
        </>
    )
}
