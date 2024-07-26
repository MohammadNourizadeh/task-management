import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import styles from './SearchInput.module.scss'

export default function SearchInput() {
    // redux
    const mode = useSelector(store => store.darkAndLightMode.mode)
    return (
        <div className={styles.king} id={mode === 'lightMode' ? styles.lightMode : ''}>
            <input type="text" placeholder='search' />
            <button>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}
