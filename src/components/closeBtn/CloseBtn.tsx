import { faMultiply } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './CloseBtn.module.scss'

type CloseBtnProps = {
    onClose: (val: boolean) => void
}

export default function CloseBtn({ onClose }: CloseBtnProps) {
    return (
        <button className={styles.closeBtn} onClick={() => { onClose(false) }}>
            <FontAwesomeIcon icon={faMultiply} />
        </button>
    )
}
