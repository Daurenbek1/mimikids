import React from "react";

import LogoIcon from '../../assets/logo.png'

import styles from './index.module.scss';

export const Logo = () => {
    return (
        <a  href='/'>
            <img className={styles.logoIcon} src={LogoIcon}/>
        </a>
    )
}