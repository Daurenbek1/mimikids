import React from "react";

import styles from './index.module.scss';

export const Button = (props) => {
    return (
        <button className={styles.button} style={props.style}>
            {props.children}
        </button>
    )
}