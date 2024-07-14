import { faSadTear } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import PageMessage from "../../components/pageMessage/PageMessage"
import TaskInput from "../myDayPage/components/taskInput/TaskInput"
import styles from './CheckedTaskPage.module.scss'

export default function CheckedTaskPage() {
    // redux
    const checkedTasks = useSelector(store => store.tasksInfo.checkedTasks)

    return (
        <div className={styles.king}>
            {checkedTasks.length > 0 ?
                <div className={styles.tasksInputContainer}>
                    {checkedTasks?.map((task, index) => (
                        <TaskInput key={task.id} task={task} taskIndex={index} />
                    ))}
                </div>
                :
                <PageMessage message="no checked task" icon={faSadTear} />
            }
        </div>
    )
}
