import React from "react";

import styles from './index.module.scss';

import { Categories } from "../../components/Categories";
import { Products } from "../../components/Products";


const ProductPages = () => {
    return (
        <div className={styles.products}>
            <Categories />
            <Products />
        </div>
    )
}

export default ProductPages;