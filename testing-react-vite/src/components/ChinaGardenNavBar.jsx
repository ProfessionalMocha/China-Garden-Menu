import React, { isValidElement } from 'react'
import styles from '../mystyle.module.css'
import { isOpen } from '../Utility';
import { getNextDayOpen } from '../Utility';

const ChinaGardenNavBar = ({startTime, endTime}) => {
  let availability = isOpen(startTime, endTime);
  return (
    <nav className={styles.navBar}>
        <div className={styles.navWrapper}>
            <a className={styles.navBrand}>China Garden</a>
            <h3 className= {`${styles.navAvailability} ${availability?styles.available:styles.notAvailable}`}>{availability? `OPEN until ${endTime}`: `CLOSED until ${getNextDayOpen(startTime)} ${startTime}` }</h3>
            <div className={styles.navWrapper} style={{width:"75%"}}>
                <button className={styles.navButton} type="submit">Info</button>
                <button className={styles.navButton} type="submit">Menu</button>
            </div>
        </div>
    </nav>
  )
}

export default ChinaGardenNavBar