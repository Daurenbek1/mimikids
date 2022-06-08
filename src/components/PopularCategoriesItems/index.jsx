import React from "react";

import styles from './index.module.scss';


export const PopularCategriesItems = () => {

    const popularCategoryItems = [
        {
            id: 1,
            name: 'Куртки',
            url: 'https://img.joomcdn.net/257ae52b8c167562b498c31f8bf1174d4afde91e_original.jpeg'
        },
        {
            id: 2,
            name: 'Ветровки',
            url: 'https://img.joomcdn.net/257ae52b8c167562b498c31f8bf1174d4afde91e_original.jpeg'
        },
        {
            id: 3,
            name: 'Джинсы',
            url: 'https://img.joomcdn.net/257ae52b8c167562b498c31f8bf1174d4afde91e_original.jpeg'
        },
        {
            id: 4,
            name: 'Двойки',
            url: 'https://img.joomcdn.net/257ae52b8c167562b498c31f8bf1174d4afde91e_original.jpeg'
        },
        {
            id: 5,
            name: 'Худи',
            url: 'https://img.joomcdn.net/257ae52b8c167562b498c31f8bf1174d4afde91e_original.jpeg'
        },
        {
            id: 6,
            name: 'Обувь',
            url: 'https://img.joomcdn.net/257ae52b8c167562b498c31f8bf1174d4afde91e_original.jpeg'
        },
    ]

    return (
        <>
            {popularCategoryItems.map((popularCategoryItem) =>
                <a key={popularCategoryItem.id} className={styles.item}>
                    <img className={styles.img} src={popularCategoryItem.url} />
                    <p className={styles.name}>{popularCategoryItem.name}</p>
                </a>)}
        </>

    )
}