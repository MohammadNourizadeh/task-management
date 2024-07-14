import { faStar, faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useId } from 'react'
import styles from './TaskInput.module.scss'
import { useDispatch } from 'react-redux'
import { addToImportant, checkTask } from '../../../../store/slices/tasksInfo/tasksInfo'

type TaskInputProps = {
    task: TasksAmounts;
    taskIndex: number
}
type TasksAmounts = [
    {
        id: number;
        taskName: string;
        taskDate: string;
        isImportant: string;
        done: boolean
    }
]

export default function TaskInput({ task, taskIndex }: TaskInputProps) {
    // redux
    const dispatch = useDispatch()

    const inputId = useId()

    return (
        <div className={styles.king}>
            <input type="checkbox" checked={task.done} id={inputId} onChange={() => { dispatch(checkTask(taskIndex)) }} />
            <div className={styles.taskInfoContainer}>
                <label htmlFor={inputId}>
                    {task.taskName}
                </label>
                <div className={styles.taskDateInfoContainer}>
                    <span className={styles.warningIcon}>
                        <FontAwesomeIcon icon={faWarning} />
                    </span>
                    <span className={styles.taskDate}>
                        {task.taskDate}
                    </span>
                </div>
            </div>
            <div className={styles.starIconContainer}>
                <button id={task.isImportant === 'yes' ? styles.active : ''} onClick={() => { dispatch(addToImportant(taskIndex)) }}>
                    <FontAwesomeIcon icon={faStar} />
                </button>
            </div>
        </div>
    )
}