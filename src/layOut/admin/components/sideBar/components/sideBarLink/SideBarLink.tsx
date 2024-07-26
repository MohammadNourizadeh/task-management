import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DisabledItem from "../disabledItem/DisabledItem";
import styles from './SideBarLink.module.scss';

type SideBarLinkProps = {
    linkName: string,
    linkIcon: IconDefinition,
    iconColor?: string,
    linkAddress: string,
    disabled?: boolean,
    focusedLink: string,
    onChooseLink: (value: string) => void,
    countOfPageItem?: number
}

export default function SideBarLink({ linkName, linkIcon, linkAddress, iconColor, disabled, focusedLink, onChooseLink, countOfPageItem }: SideBarLinkProps) {

    // redux
    const mode = useSelector(store => store.darkAndLightMode.mode)

    return (
        <>
            {!disabled ?
                <li className={mode === 'darkMode' ? styles.king : styles.lightMode} id={focusedLink === linkName && mode === 'darkMode' ? styles.focusedLink : focusedLink === linkName && mode === 'lightMode' ? styles.lightModeFocusedLink : ''} onClick={() => { onChooseLink(linkName) }}>
                    <Link to={linkAddress} className={styles.link}>
                        <span className={styles.iconContainer}>
                            <FontAwesomeIcon icon={linkIcon} style={{ color: iconColor }} />
                        </span>
                        <span className={styles.linkNameContainer}>
                            {linkName}
                        </span>
                        {countOfPageItem !== 0 &&
                            <small className={styles.numberOfLinkContentContainer}>
                                {countOfPageItem}
                            </small>}
                    </Link>
                </li>
                :
                <DisabledItem iconColor={iconColor} itemIcon={linkIcon} itemName={linkName} />
            }
        </>
    )
}
