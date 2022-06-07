import React from "react";

import { PopularCategriesItems } from "../PopularCategoriesItems";

import styles from './index.module.scss';

export const PopularCategories = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Популярные категории</h2>
            <div className={styles.inner}>
                <PopularCategriesItems />
            </div>
        </div>
    )
}