import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './PageMessage.module.scss'

type ImportantTaskPageProps = {
    message: string,
    icon: IconDefinition
}
export default function PageMessage({ message, icon }: ImportantTaskPageProps) {
    return (
        <div className={styles.king}>
            <span>{message}</span>
            <span>
                <FontAwesomeIcon icon={icon} />
            </span>
        </div>
    )
}
