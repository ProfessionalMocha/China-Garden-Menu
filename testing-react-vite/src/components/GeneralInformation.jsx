import React from 'react'
import styles from '../mystyle.module.css'
import { DaysOpen } from '../App'

const GeneralInformation = ({startTime, endTime}) => {
  return (
    <>
    <div className={styles.informationMainWrapper}>
      <div className={`${styles.informationStyle} ${styles.informationCardWrapper}`}>
        <h3 className={`${styles.informationStyle} ${styles.informationTitle}`}> CONTACT US </h3>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}>Call us at: 1-302-777-3600</h4>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}>100 south union street Wilmington Delaware</h4>
      </div>
      <div className={`${styles.informationStyle} ${styles.informationCardWrapper}`}>
        <h3 className={`${styles.informationStyle} ${styles.informationTitle}`}> OPENING HOURS </h3>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}> {`${DaysOpen[0]}-${DaysOpen[DaysOpen.length -1]}: ${startTime} - ${endTime}`}</h4>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}> Sunday : CLOSED</h4>
      </div>
      <div className={`${styles.informationStyle} ${styles.informationCardWrapper}`}>
        <h3 className={`${styles.informationStyle} ${styles.informationTitle}`}>General Information </h3>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}>We don't accept call-in-orders 45 mintes before closing</h4>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}>Cash only, Atm inside</h4>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}>No delivery, take-out only</h4>
      </div>
      <div className={`${styles.informationStyle} ${styles.informationCardWrapper}`}>
        <h3 className={`${styles.informationStyle} ${styles.informationTitle}`}>Customers with Food Alergies </h3>
        <h4 className={`${styles.informationStyle} ${styles.informationInformation}`}>We process varies food in the same fryer. Cooking utensils, cleaning the mafter each order does not always eliminate allergic reactions of some severely sensitive customers</h4>
      </div>
    </div>
    </>
  )
}

export default GeneralInformation