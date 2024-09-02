import React from 'react'
import { useState } from 'react'
import styles from '../mystyle.module.css'

const DropdownComponent = ({ title = "options", sections }) => {
    const [showChildren, changeState] = useState(false);

    function handleClick() {
        changeState(!showChildren)
    }
    return (
        <div onClick={handleClick} className={styles.dropdownWrapper}>
            <h1 className={styles.dropdownButton}>{title}</h1>
            <div className={`${showChildren?styles.dropdownDisplayBlock:styles.dropdownDisplayNone} ${styles.dropdownItemWrapper}`}>
                {sections.map((sectionTitle) => {
                    let sectionId = sectionTitle.replace(" ", "-");
                    return <a className={styles.dropdownItem} href={`#${sectionId}`} key={`navBar-${sectionId}}`}>{sectionTitle}</a>
                })}
            </div>
        </div>
    )
}

export default DropdownComponent