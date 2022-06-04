import React from "react";

import basketIcon from '../../assets/basketIcon.svg';

import styles from './index.module.scss';

export const Basket = () => {
    return (
        <div className={styles.basketContainer}>
            <img src={basketIcon} className={styles.basketIcon}/>
            <span className={styles.product}>0</span>
            <span className={styles.name}>товаров</span>
        </div>
    )
}