import React from "react";

import styles from './index.module.scss';

export const Logo = () => {
    return (
        <a  href='/'>
            <img className={styles.logoIcon} src='/assets/icons/logo.png'/>
        </a>
    )
}