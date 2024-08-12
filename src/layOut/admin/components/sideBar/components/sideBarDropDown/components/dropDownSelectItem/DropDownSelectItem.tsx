import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import styles from './DropDownSelectItem.module.scss';

type DropDownSelectItemProps = {
    itemName: string;
    selectFunc: (val: string) => void;
    selectOptions: SelectOptionsType[];
    icon: IconDefinition;
}

type SelectOptionsType = {
    val: string;
    name: string;
}


export default function DropDownSelectItem({ itemName, selectFunc, selectOptions, icon }: DropDownSelectItemProps) {

    // ref hooks
    const selectInputRef = useRef()

    // func
    const selectOnChangeFunc = () => {
        const selectInputVal = selectInputRef.current.value;
        selectFunc(selectInputVal)
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
                <select ref={selectInputRef} onChange={selectOnChangeFunc}>
                    {selectOptions.map((option, index) => (
                        <option value={option.val} key={index}>{option.name}</option>
                    ))}
                </select>
            </span>
        </li>
    )
}
