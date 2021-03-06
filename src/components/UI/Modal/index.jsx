import React from "react";

import styles from './index.module.scss';

export const Modal = ({children, visible, setModal}) => {

    const rootClasses = [styles.modal]

    if(visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}