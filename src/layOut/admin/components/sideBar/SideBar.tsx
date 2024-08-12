import { faCalendarAlt, faCog, faNoteSticky, faStar, faSun, faTasks } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CloseBtn from '../../../../components/closeBtn/CloseBtn'
import SideBarDropDown from './components/sideBarDropDown/SideBarDropDown'
import SideBarLink from './components/sideBarLink/SideBarLink'
import UserInfoItem from './components/userInfoItem/UserInfoItem'
import styles from './styles/SideBar.module.scss'

type SideBarProps = {
  pageNameSetter: (value: string) => void
  onClose: (value: boolean) => void
}

export default function SideBar({ pageNameSetter, onClose }: SideBarProps) {
  // redux
  const countOfMyDayPageItem = useSelector((store) => store.tasksInfo.tasks.length)
  const countOfImportantTaskPageItem = useSelector((store) => store.tasksInfo.importantTasks.length)
  const countOfCheckedTaskPageItem = useSelector((store) => store.tasksInfo.checkedTasks.length)


  // state
  const [focusedItem, setFocusedItem] = useState<string>('my day')

  // func
  const choosedLinkHandler = (value: string) => {
    setFocusedItem(value)
    pageNameSetter(value)
  }

  return (
    <div className={styles.king}>

      <UserInfoItem />

      <hr />

      <ul className={styles.sideBarItemContainer}>
        <SideBarLink
          linkName='my day'
          linkIcon={faSun}
          linkAddress='/admin/my-day'
          focusedLink={focusedItem}
          onChooseLink={choosedLinkHandler}
          countOfPageItem={countOfMyDayPageItem}
        />
        <SideBarLink
          linkName='important'
          linkIcon={faStar}
          linkAddress='/admin/important'
          focusedLink={focusedItem}
          onChooseLink={choosedLinkHandler}
          countOfPageItem={countOfImportantTaskPageItem}
        />
        <SideBarLink
          linkName='planned'
          linkIcon={faCalendarAlt}
          linkAddress='/admin/my-day'
          iconColor='rgb(200, 10, 57)'
          disabled
          focusedLink={focusedItem}
          onChooseLink={choosedLinkHandler}
        />
        <SideBarLink
          linkName='notes'
          linkIcon={faNoteSticky}
          linkAddress='/admin/note'
          iconColor='rgb(91, 246, 77)'
          focusedLink={focusedItem}
          onChooseLink={choosedLinkHandler}
        />
        <SideBarLink
          linkName='checked'
          linkIcon={faTasks}
          linkAddress='/admin/checked'
          countOfPageItem={countOfCheckedTaskPageItem}
          focusedLink={focusedItem}
          onChooseLink={choosedLinkHandler}
        />
        <SideBarDropDown
          itemIcon={faCog}
          itemName='setting'
        />
      </ul>

      <div className={styles.closeBtnContainer}>
        <CloseBtn onClose={onClose} />
      </div>
    </div>
  )
}
