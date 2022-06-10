import React from "react";

import styles from './index.module.scss';

const Category = (props) => {
    const { category } = props
    return (
        <li className={styles.item}>
            {category.name}
        </li>
    )
}

export const Categories = () => {
    const categories = [
        { id: 1, name: 'Куртки' },
        { id: 1, name: 'Ветровки' },
        { id: 1, name: 'Джинсы' },
        { id: 1, name: 'Двойки' },
        { id: 1, name: 'Худи' },
        { id: 1, name: 'Обувь' },
        { id: 1, name: 'Платья' },
    ]
    return (
        <nav className={styles.inner}>
            <h3 className={styles.title}>Категории</h3>
            <ul className={styles.categories}>
                {categories.map((category) => <Category category={category} />)}
            </ul>
        </nav>
    )
}