import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './DisabledItem.module.scss'

type DisabledItemProps = {
    itemIcon: IconDefinition;
    iconColor?: string;
    itemName: string;
}

export default function DisabledItem({ itemIcon, iconColor, itemName }: DisabledItemProps) {
    return (
        <li className={styles.disabledItem}>
            <span className={styles.iconContainer}>
                <FontAwesomeIcon icon={itemIcon} style={{ color: iconColor }} />
            </span>
            <span className={styles.itemNameContainer}>
                {itemName}
            </span>
        </li>
    )
}
