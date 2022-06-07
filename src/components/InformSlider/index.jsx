import React from "react";
import { CarouselSlider } from "../CarouselSlider";

import styles from './index.module.scss';

export const InformSlider = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.item}>

            </div>
            <div className={styles.item}>
                 <CarouselSlider />
            </div>
            <div className={styles.item}>
                
            </div>
        </div>
    )
}