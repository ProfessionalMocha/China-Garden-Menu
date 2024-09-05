import React from 'react'
import MenuItemCardFlex from './MenuItemCardFlex'
import styles from '../mystyle.module.css'

const SectionCard = ({title, subtitle = false, options = ["Pt", "Qt"], tempData, idTag = "I", Large = false, sendSelectedItem}) => {
    return (
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionTitleWrapper}>
            <h1 className={`${subtitle?styles.sectionTitle:styles.sectionTitleOnly}`} id={title.replace(" ","-")}>{title}</h1>
            {subtitle?<h3 className={`${styles.sectionSubtitles} ${styles.sectionLastSubtitle}`}>{subtitle}</h3>:""}
          </div>
          <div className={styles.sectionCardContainer}>
            {tempData.map((item,index) => (
              <MenuItemCardFlex key={`${title.replace(" ","-")}-${index}`} item={item} idTag = {idTag} Large = {Large} sendSelectedItem = {sendSelectedItem}/>
            ))}
          </div>
        </div>
      )
}

export default SectionCard