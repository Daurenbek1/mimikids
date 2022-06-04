import React from "react";

import { Phone } from '../Phone';
import { MapIcon } from '../svg/MapIcon'

import instagramIcon from '../../assets/Instagram.svg';
import telegramIcon from '../../assets/Telegram.svg';

import styles from './index.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialContainer}>
                <h4 className={styles.title}>MIMIKIDS в соц.сетях</h4>
                <ul className={styles.list}>
                    <li className={styles.item}><a href="https://instagram.com/mimikids_shym?igshid=YmMyMTA2M2Y="><img className={styles.icon} src={instagramIcon}/></a></li>
                    <li className={styles.item}><a href="#"><img className={styles.icon} src={telegramIcon}/></a></li>
                </ul>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.aboutUs}>
                    <h4 className={styles.title}>О КОМПАНИИ</h4>
                    <Phone />
                    <Phone />
                    <div className={styles.address}>
                        <MapIcon />
                        <p className={styles.addressName}>мкр "Север", ул Т. Рыскулова, 72/8</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.title}>ИНФОРМАЦИЯ</h4>
                    <ul className={styles.list}>
                        <li className={styles.item}><a className={styles.link}>Доставка и оплата</a></li>
                        <li className={styles.item}><a className={styles.link}>О нас</a></li>
                        <li className={styles.item}><a className={styles.link}>Политика Безопасности</a></li>
                        <li className={styles.item}><a className={styles.link}>Пользовательское соглашение</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}