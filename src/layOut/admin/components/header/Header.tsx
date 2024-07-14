import styles from './Header.module.scss'
import MyDate from './components/myDate/MyDate'
import SearchInput from './components/searchInput/SearchInput'

type HeaderProps = {
    pageName: string
}

export default function Header({ pageName }: HeaderProps) {
    return (
        <div className={styles.king}>
            <div className={styles.headerInfoContainer}>
                <div className={styles.pageNameAndDateInfoContainer}>
                    <div className={styles.pageNameContainer}>
                        {pageName}
                    </div>
                    <div className={styles.dateInfoContainer}>
                        <MyDate />
                    </div>
                </div>
                <div className={styles.searchInputContainer}>
                    <SearchInput />
                </div>
            </div>
        </div>
    )
}
