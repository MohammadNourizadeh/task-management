import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import PageMessage from '../../components/pageMessage/PageMessage'
import TaskInput from '../myDayPage/components/taskInput/TaskInput'
import styles from './ImportantTaskPage.module.scss'

export default function ImportantTaskPage() {
    // redux
    const importantTasks = useSelector(store => store.tasksInfo.importantTasks)

    return (
        <div className={styles.king}>
            {importantTasks.length > 0 ?
                <div className={styles.tasksInputContainer}>
                    {importantTasks?.map((task, index) => (
                        <TaskInput key={task.id} task={task} taskIndex={index} />
                    ))}
                </div>
                :
                <PageMessage message="no starred task" icon={faSadTear} />
            }
        </div>
    )
}




