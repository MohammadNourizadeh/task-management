import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AddTaskBtn.module.scss'

type AddTaskBtnProps = {
    onAdd: (value: boolean) => void
}

export default function AddTaskBtn({ onAdd }: AddTaskBtnProps) {
    return (
        <button className={styles.king} onClick={() => { onAdd(true) }} >
            <span>
                <FontAwesomeIcon icon={faAdd} />
            </span>
            add new task
        </button>
    )
}
