import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from './SideBarLink.module.scss';
import DisabledItem from "../disabledItem/DisabledItem";

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

    return (
        <>
            {!disabled ?
                <li className={styles.king} id={focusedLink === linkName ? styles.focusedLink : ''} onClick={() => { onChooseLink(linkName) }}>
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
