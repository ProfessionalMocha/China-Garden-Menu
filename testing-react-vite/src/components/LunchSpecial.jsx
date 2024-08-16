import React from 'react'
import { lunchSpecialAvailability, getNextDayOpen } from '../Utility'
import MenuItemCardFlex from './MenuItemCardFlex'
import styles from '../mystyle.module.css'

const LunchSpecial = ({ startTime, endTime, tempData, USDollar }) => {
  let available = lunchSpecialAvailability(startTime, endTime);
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.sectionTitleWrapper}>
        <h1 className={styles.sectionTitle}>Lunch Special</h1>
        <h3 className={`${styles.sectionMiddleSubtitle} ${available?styles.available:styles.notAvailable}`}>{`${available ? `Available until ${endTime}` : `Not Available until ${getNextDayOpen(startTime)} ${startTime}`}`}</h3>
        <h3 className={`${styles.sectionSubtitles} ${styles.sectionLastSubtitle}`}>Serves with pork fried rice and egg roll</h3>
      </div>
      <div className={styles.sectionCardWrapper}>
        <div className={styles.sectionCardContainer}>
          {tempData.map((item) => (
            <MenuItemCardFlex key={`L${item.id}`} item={item} USDollar={USDollar} idTag = {"L"} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LunchSpecial