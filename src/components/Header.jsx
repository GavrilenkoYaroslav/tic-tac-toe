import React from 'react';
import styles from '../assets/css/Header.module.css';

export const Header = ({score, turn, counter}) => {
    return (
        <div className={styles.container}>
            <span>Move: {counter}</span>
            <div className={styles.scoreBox}>
                <span>Player 1 / Player 2</span>
                <span className={styles.score}>{score}</span>
            </div>
            <span>Turn: {turn}</span>
        </div>
    );
};