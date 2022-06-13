import React from "react";

import styles from './index.module.scss';

export const Basket = () => {
    return (
        <div className={styles.basketContainer}>
            <img src='/assets/Icons/basketIcon.svg' className={styles.basketIcon}/>
            <span className={styles.product}>0</span>
            <span className={styles.name}>товаров</span>
        </div>
    )
}