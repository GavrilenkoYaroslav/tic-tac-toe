import React from 'react';
import styles from '../assets/css/Header.module.css';

export const Header = ({score, turn, counter}) => {
    return (
        <div className={styles.container}>
            <span>Move: {counter}</span>
            <div className={styles.score}>
                <span>Player 1 / Player 2</span>
                <span>{score}</span>
            </div>
            <span>Turn: {turn}</span>
        </div>
    );
};