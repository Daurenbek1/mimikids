import React from "react";

import styles from './index.module.scss';

export const CallBack = (props) => {
    return (
        <div className={styles.callBack}>
            <img className={styles.phoneIcon1} src='/assets/Icons/phone2.svg'/>
            <button className={styles.button} onClick={() => props.setModal(true)}>Заказать звонок</button>
        </div>
    )
}