import React from 'react'
import { useState } from 'react';
import styles from '../mystyle.module.css'

const MenuItemCardFlex = ({ item, USDollar, idTag = '', Large = false , sendItemSelectionFuntionWrapper}) => {
    let optionIndex = 0;

    return (
        <div className={`${styles.cardDisplay} ${Large ? styles.cardOutterWraperSizeLarge : styles.cardOutterWraperSizeNormal} ${styles.cardOutterWraper} ${item.spicy ? styles.itemSpicy : styles.itemNormal} `}>
            <div className={`${styles.cardDisplay} ${styles.cardIndexWrapper}`}>
                <h4 className={`${styles.cardDisplay} ${styles.cardItemIndex}`}>{`${idTag}${item.id}`}</h4>
            </div>
            <div className={`${styles.cardDisplay} ${styles.cardInnerWrapper}`}>
                <h4 className={styles.cardItemName}>{item.name}</h4>
                {item.prices.map((price) => (
                    <div onClick={() =>(sendItemSelectionFuntionWrapper({"item": item.name, "price": price}))} className={styles.cardItemPriceWrapper}>
                        <h4  className={styles.cardItemPrice} key={`${item.name}-${optionIndex++}`}>{USDollar.format(price)}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuItemCardFlex