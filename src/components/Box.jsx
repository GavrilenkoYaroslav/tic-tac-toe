import React from 'react';
import styles from '../assets/css/Box.module.css';

export const Box = ({ value, index, markBox }) => {

    const clickHandler = () => {
        markBox(index);
    }

    return (
        <div onClick={ clickHandler } className={styles.box}>
            {value && value}
        </div>
    );
};