import React from 'react'
import styles from '../mystyle.module.css'

const PriceChecker = ({items, USDollar, deleteItemFromSelected}) => {

    let sumPrice = 0;
  return (
    <div className={styles.priceCheckerOutterWrapper}>
        {items.map((item, index) =>{
            sumPrice += item.price;
            return(
            <div className={styles.priceCheckerItemWrapper} onClick={()=>deleteItemFromSelected(index)}>
                <h4 className={`${styles.priceCheckerItemName} ${styles.priceCheckerItem}`}>{item.item}</h4>
                <h4 className={`${styles.priceCheckerItemPrice} ${styles.priceCheckerItem}`}>{USDollar.format(item.price)}</h4>
            </div>
            )
        })}
        <div className={styles.priceCheckerFinalPriceWrapper}>
            <h4 className={`${styles.priceCheckerItemName} ${styles.priceCheckerItem}`}>total</h4>
            <h4 className={`${styles.priceCheckerItemPrice} ${styles.priceCheckerItem}`}>{USDollar.format(sumPrice)}</h4>
        </div>
    </div>
  )
}

export default PriceChecker