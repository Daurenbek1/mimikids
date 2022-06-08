import React from "react";

import styles from './index.module.scss';

export const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [styles.modal]

    if(visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    )
}