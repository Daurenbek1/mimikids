import React from "react";

import phoneIcon1 from '../../assets/phone2.svg';

import styles from './index.module.scss';

export const CallBack = () => {
    return (
        <div className={styles.callBack}>
            <img className={styles.phoneIcon1} src={phoneIcon1}/>
            <button className={styles.button}>Заказать звонок</button>
        </div>
    )
}