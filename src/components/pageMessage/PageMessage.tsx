import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import styles from './PageMessage.module.scss'

type ImportantTaskPageProps = {
    message: string,
    icon: IconDefinition
}
export default function PageMessage({ message, icon }: ImportantTaskPageProps) {
    // redux
    const mode = useSelector(store => store.darkAndLightMode.mode)

    return (
        <div className={styles.king} id={mode === 'lightMode' ? styles.lightMode : ''}>
            <span>{message}</span>
            <span>
                <FontAwesomeIcon icon={icon} />
            </span>
        </div>
    )
}
