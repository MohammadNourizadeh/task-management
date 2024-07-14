import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import styles from './UserInfoItem.module.scss'

export default function UserInfoItem() {
    // redux
    const username = useSelector(store => store.userInfo.username)

    return (
        <div className={styles.king}>
            <span className={styles.iconContainer}>
                <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <span className={styles.userName}>
                {username}
            </span>
        </div>
    )
}
