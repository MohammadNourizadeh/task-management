import { useState } from 'react'
import { useSelector } from 'react-redux'
import AddBtn from '../../components/addBtn/AddBtn'
import TaskForm from './components/taskForm/TaskForm'
import TaskInput from './components/taskInput/TaskInput'
import styles from './MyDayPage.module.scss'

type TasksAmounts = [
    {
        id: number,
        taskName: string,
        taskDate: string
        isImportant: string
        done: boolean
    }
]

export default function MyDayPage() {
    // redux
    const tasks: TasksAmounts = useSelector(store => store.tasksInfo.tasks)

    // state
    const [isAddingTask, setIsAddingTask] = useState(false)

    return (
        <div className={styles.king}>
            <div className={styles.tasksInputContainer}>
                {tasks?.map((task, index) => (
                    <TaskInput key={task.id} task={task} taskIndex={index} />
                ))}
            </div>
            <div className={styles.addNewTaskBtnContainer}>
                <AddBtn btnName='add new task' onAdd={(value) => { setIsAddingTask(value) }} />
            </div>
            {isAddingTask &&
                <div className={styles.taskFormContainer}>
                    <TaskForm onClose={(value) => { setIsAddingTask(value) }} />
                </div>}
        </div>
    )
}