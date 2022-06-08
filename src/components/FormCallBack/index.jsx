import React from "react";

import styles from './index.module.scss';

import { Title } from '../UI/Title';
import { Input } from '../UI/Input';
import { Button } from "../UI/Button";

export const FormCallBack = () => {
    return (
        <div>
            <form className={styles.form} action="">
                <Title>Заказать обратный звонок</Title>
                <div className={styles.container}>
                    <Input name="name" type="text" placeholder="Ваше имя" required />
                    <Input name="phone" type="phone" placeholder="Номер телефона" required />
                    <Button name="submit" type="submit" style={{ width: '200px' }}>Отправить</Button>
                </div>
            </form>
        </div>
    )
}