import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './DropDownSelectItem.module.scss';

type DropDownSelectItemProps = {
    itemName: string;
    icon: IconDefinition
}

export default function DropDownSelectItem({ itemName, icon }: DropDownSelectItemProps) {
    return (
        <li className={styles.dropDownItem}>
            <span className={styles.iconContainer}>
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className={styles.itemNameContainer}>
                {itemName}
            </span>
            <span className={styles.selectInputContainer}>
                <select>
                    <option value="darkMode">dark</option>
                    <option value="lightMode">light</option>
                </select>
            </span>
        </li>
    )
}
