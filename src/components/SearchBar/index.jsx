import React from 'react';

import { SearchIcon } from '../svg/SearchIcon';

import styles from './index.module.scss';

export const SearchBar = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input}/>
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </form>
  )
}





