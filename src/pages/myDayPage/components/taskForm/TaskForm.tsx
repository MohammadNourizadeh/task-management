import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../../../store/slices/tasksInfo/tasksInfo'
import styles from './TaskForm.module.scss'

type TaskFormProps = {
    onCancel: (value: boolean) => void
}

export default function TaskForm({ onCancel }: TaskFormProps) {
    // redux
    const dispatch = useDispatch()

    // state
    const [taskName, setTaskName] = useState<string>('');
    const [taskDate, setTaskDate] = useState<string>('');
    const [isImportant, setIsImportant] = useState<string>('no')

    // func
    const addTaskHandler = () => {
        dispatch(addTask({ taskName, taskDate, isImportant }));
        onCancel(false)
    }


    return (
        <form className={styles.king} onSubmit={addTaskHandler}>
            <div className={styles.textInputContainer}>
                <label htmlFor="taskName">enter the task :</label>
                <input type="text" id='taskName' name='taskName' value={taskName} onChange={(e) => { setTaskName(e.target.value) }} />
            </div>
            <div className={styles.dateInputContainer}>
                <label htmlFor="taskDate">enter the date of rhe task :</label>
                <input type="date" id='taskDate' name='taskDate' value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} />
            </div>
            <div className={styles.selectContainer}>
                <label htmlFor="isImportant">is the task important ?</label>
                <select name="isImportant" id="isImportant" value={isImportant} onChange={(e) => { setIsImportant(e.target.value) }}>
                    <option value="no">no</option>
                    <option value="yes">yes</option>
                </select>
            </div>

            <hr />

            <div className={styles.btnContainer}>
                <button type='submit'>add a task</button>
            </div>

            <button className={styles.multiplyIconContainer} onClick={() => { onCancel(false) }}>
                <FontAwesomeIcon icon={faMultiply} />
            </button>
        </form>
    )
}
