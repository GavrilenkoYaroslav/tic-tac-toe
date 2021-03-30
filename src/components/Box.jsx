import React from 'react';
import styles from '../assets/css/Box.module.css';

export const Box = ({value, index, markBox, turn, AI}) => {

    const clickHandler = () => {
        if (AI && turn === 'Player 2') return;
        markBox(index);
    }

    return (
        <div onClick={clickHandler} className={styles.box}>
            {value}
        </div>
    );
}