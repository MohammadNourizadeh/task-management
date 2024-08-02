import { useDispatch, useSelector } from 'react-redux'
import CloseBtn from '../../../../components/closeBtn/CloseBtn'
import { addTask } from '../../../../store/slices/tasksInfo/tasksInfo'
import styles from './TaskForm.module.scss'

type TaskFormProps = {
    onClose: (value: boolean) => void
}

export default function TaskForm({ onClose }: TaskFormProps) {

    // redux
    const mode = useSelector(store => store.darkAndLightMode.mode)
    const dispatch = useDispatch()

    // func
    const addTaskHandler = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);
        const { taskName, taskDate, isImportant } = Object.fromEntries(formData)

        dispatch(addTask({ taskName, taskDate, isImportant }));
        onClose(false)
    }




    return (
        <form className={styles.king} id={mode === 'lightMode' ? styles.lightMode : ''} onSubmit={addTaskHandler}>
            <div className={styles.textInputContainer}>
                <label htmlFor="taskName">enter the task :</label>
                <input type="text" id='taskName' name='taskName' />
            </div>
            <div className={styles.dateInputContainer}>
                <label htmlFor="taskDate">enter the date of rhe task :</label>
                <input type="date" id='taskDate' name='taskDate' />
            </div>
            <div className={styles.selectContainer}>
                <label htmlFor="isImportant">is the task important ?</label>
                <select name="isImportant" id="isImportant" >
                    <option value="no">no</option>
                    <option value="yes">yes</option>
                </select>
            </div>

            <hr />

            <div className={styles.btnContainer}>
                <button type='submit'>add a task</button>
            </div>

            <div className={styles.closeBtnContainer}>
                <CloseBtn onClose={onClose} />
            </div>

        </form>
    )
}
