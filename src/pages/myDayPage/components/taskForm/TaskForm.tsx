import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../../../store/slices/tasksInfo/tasksInfo'
import styles from './TaskForm.module.scss'

type TaskFormProps = {
    onCancel: (value: boolean) => void
}

export default function TaskForm({ onCancel }: TaskFormProps) {
    // refHooks
    const taskNameRef = useRef()
    const taskDateRef = useRef()
    const isImportantRef = useRef()

    // redux
    const dispatch = useDispatch()

    // func
    const addTaskHandler = () => {
        const taskName = taskNameRef.current.value;
        const taskDate = taskDateRef.current.value;
        const isImportant = isImportantRef.current.value;
        dispatch(addTask({ taskName, taskDate, isImportant }));
        onCancel(false)
    }




    return (
        <form className={styles.king} onSubmit={addTaskHandler}>
            <div className={styles.textInputContainer}>
                <label htmlFor="taskName">enter the task :</label>
                <input type="text" id='taskName' name='taskName' ref={taskNameRef} />
            </div>
            <div className={styles.dateInputContainer}>
                <label htmlFor="taskDate">enter the date of rhe task :</label>
                <input type="date" id='taskDate' name='taskDate' ref={taskDateRef} />
            </div>
            <div className={styles.selectContainer}>
                <label htmlFor="isImportant">is the task important ?</label>
                <select name="isImportant" id="isImportant" ref={isImportantRef}>
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
