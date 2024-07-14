import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SearchInput.module.scss'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchInput() {
    return (
        <div className={styles.king}>
            <input type="text" placeholder='search' />
            <button>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
}
