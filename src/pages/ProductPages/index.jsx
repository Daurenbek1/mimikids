import React from "react";

import styles from './index.module.scss';

import { Categories } from "../../components/Categories";


const ProductPages = () => {
    return (
        <div className={styles.products}>
            <Categories />
        </div>
    )
}

export default ProductPages;