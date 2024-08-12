import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './AddBtn.module.scss'

type AddTaskBtnProps = {
    onAdd: (value: boolean) => void
    btnName: string
}

export default function AddBtn({ onAdd, btnName }: AddTaskBtnProps) {
    return (
        <button className={styles.king} onClick={() => { onAdd(true) }} >
            <span>
                <FontAwesomeIcon icon={faAdd} />
            </span>
            {btnName}
        </button>
    )
}
