import React from "react";

import styles from './index.module.scss';

export const Input = (props) => {
    return (
        <input className={styles.input} {...props}/>
    )
}