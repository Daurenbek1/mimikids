import React from "react";
import { Button } from "../UI/Button";

import styles from './index.module.scss';


const Product = (props) => {
    return (
        <div className={styles.product}>
            <img className={styles.img} src={props.img}/>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.text}>в наличи</p>
            <div className={styles.bottom}>
                <span className={styles.price}>{props.price}</span>
                <Button>Выбрать</Button>
            </div>
        </div>
    )
}

export const Products = () => {
    const products = [
        {   
            id: 1,
            name: 'Куртка демисезонная Midimod Gold',
            price: '4900 тенге',
            url: '/assets/Product/item1.jpg',
        },
        {   
            id: 2,
            name: 'Куртка демисезонная Midimod Gold',
            price: '6700 тенге',
            url: '/assets/Product/item2.jpg',
        },
        {   
            id: 3,
            name: 'Куртка демисезонная Midimod Gold',
            price: '5100 тенге',
            url: '/assets/Product/item3.jpg',
        },
        {   
            id: 4,
            name: 'Куртка демисезонная Midimod Gold',
            price: '2300 тенге',
            url: '/assets/Product/item4.jpg',
        },
        {   
            id: 5,
            name: 'Куртка демисезонная Midimod Gold',
            price: '2400 тенге',
            url: '/assets/Product/item5.jpg',
        },
        {   
            id: 6,
            name: 'Куртка демисезонная Midimod Gold',
            price: '2300 тенге',
            url: '/assets/Product/item6.jpg',
        },
        {   
            id: 7,
            name: 'Куртка демисезонная Midimod Gold',
            price: '7800 тенге',
            url: '/assets/Product/item7.jpg',
        },
        {   
            id: 8,
            name: 'Куртка демисезонная Midimod Gold',
            price: '12000 тенге',
            url: '/assets/Product/item8.jpg',
        },
        {   
            id: 9,
            name: 'Куртка демисезонная Midimod Gold',
            price: '7100 тенге',
            url: '/assets/Product/item9.jpg',
        },
        {   
            id: 10,
            name: 'Куртка демисезонная Midimod Gold',
            price: '5500 тенге',
            url: '/assets/Product/item10.jpg',
        },
        {   
            id: 11,
            name: 'Куртка демисезонная Midimod Gold',
            price: '3500 тенге',
            url: '/assets/Product/item11.jpg',
        },
        {   
            id: 12,
            name: 'Куртка демисезонная Midimod Gold',
            price: '4900 тенге',
            url: '/assets/Product/item12.jpg',
        }
    ]
    return (
        <div className={styles.productsInner}>
            <h2 className={styles.title}>Ветровки</h2>
            <div className={styles.products}>
                {products.map((product) => <Product img={product.url} key={product.id} name={product.name} price={product.price}/>)}
            </div>
        </div>
    )
}