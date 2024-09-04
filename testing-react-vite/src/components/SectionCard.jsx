import React from 'react'
import MenuItemCardFlex from './MenuItemCardFlex'
import styles from '../mystyle.module.css'

const SectionCard = ({title, subtitle = false, options = ["Pt", "Qt"], tempData, USDollar, idTag = "I", Large = false, sendItemSelectionFuntionWrapper}) => {
    return (
        <div className={styles.sectionWrapper}>
          <div className={styles.sectionTitleWrapper}>
            <h1 className={`${subtitle?styles.sectionTitle:styles.sectionTitleOnly}`} id={title.replace(" ","-")}>{title}</h1>
            {subtitle?<h3 className={`${styles.sectionSubtitles} ${styles.sectionLastSubtitle}`}>{subtitle}</h3>:""}
          </div>
          <div className={styles.sectionCardContainer}>
            {tempData.map((item) => (
              <MenuItemCardFlex key={`${title.replace(" ","-")}-${item.id}`} item={item} USDollar={USDollar} idTag = {idTag} Large = {Large} sendItemSelectionFuntionWrapper = {sendItemSelectionFuntionWrapper}/>
            ))}
          </div>
        </div>
      )
}

export default SectionCard