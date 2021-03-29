import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../assets/css/PageNotFound.module.css';
const PageNotFound = () => {
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NOT FOUND</h1>
            <span className={styles.back} onClick={ goBack }>Go to menu</span>
        </div>
    );
};

export default PageNotFound;