import React from "react";
import './index.module.scss';

import { SearchBar } from "../SearchBar";
import { Phone } from "../Phone";
import { Logo } from "../Logo";
import { CallBack } from "../CallBack";
import { Basket } from "../Basket";

import styles from './index.module.scss';

export const Header = () => {
    return (
        <header>
            <div className={styles.headerTop}>
                <div>
                    <SearchBar />
                    <Phone />
                </div>
                <Logo />
                <div>
                    <CallBack />
                    <Basket />
                </div>
            </div>
            <ul className={styles.headerBottom}>
                <li className={styles.list}><a className={styles.link}href="#">Куртки</a></li>
                <li className={styles.list}><a className={styles.link}href="#">Ветровки</a></li>
                <li className={styles.list}><a className={styles.link}href="#">Джинсы</a></li>
                <li className={styles.list}><a className={styles.link}href="#">Двойки</a></li>
                <li className={styles.list}><a className={styles.link}href="#">Худи</a></li>
                <li className={styles.list}><a className={styles.link}href="#">Обувь</a></li>
                <li className={styles.list}><a className={styles.link}href="#">Платья</a></li>
            </ul>
        </header>
    )
}