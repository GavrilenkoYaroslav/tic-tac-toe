import React from 'react';
import styles from '../assets/css/PlayOneMore.module.css';

export const PlayOneMore = ({winner, finish, init}) => {
    return (
        <div className={styles.container}>
            <span>Winner: {winner}</span>
            <p>Would you like to play one more time ?</p>
            <div className={styles.controls}>
                <span className={styles.confirm} onClick={ init }>Yes</span>
                <span className={styles.decline} onClick={ finish }>No</span>
            </div>
        </div>
    );
}