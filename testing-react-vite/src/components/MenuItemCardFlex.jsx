import React from 'react'
import styles from '../mystyle.module.css'

const MenuItemCardDualPrice = ({item, USDollar, idTag = '', Large = false}) => {
    let optionIndex = 0;
    return (
        <div className={`${styles.cardDisplay} ${Large?styles.cardOutterWraperSizeLarge:styles.cardOutterWraperSizeNormal} ${styles.cardOutterWraper} ${item.spicy?styles.itemSpicy:styles.itemNormal} `}>
            <div className = {`${styles.cardDisplay} ${styles.cardIndexWrapper}`}>
                <h4 className={`${styles.cardDisplay} ${styles.cardItemIndex}`}>{`${idTag}${item.id}`}</h4>
            </div>
            <div className={`${styles.cardDisplay} ${styles.cardInnerWrapper}`}>
                <h4 className={styles.cardItemName}>{item.name}</h4>
                {item.prices.map((price) =>(
                    <h4 className={styles.cardItemPrice} key={`${idTag}${item.id}-${optionIndex++}`}>{USDollar.format(price)}</h4>
                ))}
            </div>
        </div>
    )
}

export default MenuItemCardDualPrice