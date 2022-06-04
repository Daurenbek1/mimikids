import React from "react";

import { PhoneIcon } from "../svg/PhoneIcon";

import styles from './index.module.scss'

export const Phone = () => {
    return (
        <div className={styles.phoneContainer}>
            <PhoneIcon />
            <a className={styles.phone} href="tel:+77081118647">+7(708)111-86-47</a>
        </div>
    )
}