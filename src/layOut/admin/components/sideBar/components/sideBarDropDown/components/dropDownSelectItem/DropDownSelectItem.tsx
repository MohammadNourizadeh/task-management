import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../../../../../../../store/slices/darkAndLightMode/darkAndLightMode';
import styles from './DropDownSelectItem.module.scss';

type DropDownSelectItemProps = {
    itemName: string;
    icon: IconDefinition
}

export default function DropDownSelectItem({ itemName, icon }: DropDownSelectItemProps) {
    // redux
    const dispatch = useDispatch()

    // ref hooks
    const darkAndLightModeRef = useRef()

    // func
    const darkAndLightModeHandler = () => {
        const mode = darkAndLightModeRef.current.value;
        dispatch(changeMode(mode))

    }

    return (
        <li className={styles.dropDownItem} id={itemName === 'lightMode' ? styles.lightMode : ''}>
            <span className={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className={styles.itemNameContainer}>
                {itemName}
            </span>
            <span className={styles.selectInputContainer}>
                <select ref={darkAndLightModeRef} onChange={darkAndLightModeHandler}>
                    <option value="darkMode">dark</option>
                    <option value="lightMode">light</option>
                </select>
            </span>
        </li>
    )
}
