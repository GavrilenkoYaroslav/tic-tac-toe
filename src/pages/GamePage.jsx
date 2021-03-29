import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {Header} from "../components/Header";
import {Game} from "../components/Game";
import styles from '../assets/css/GamePage.module.css';
import {initialConfig} from "../assets/initialConfig";
import {PlayOneMore} from "../components/PlayOneMore";

const GamePage = ({config, setConfig}) => {
    const [winner, setWinner] = useState(null);
    const history = useHistory();
    !config.init && history.push('/');

    const score = `${config.player_1.score} / ${config.player_2.score}`;
    const turn = config.player_1.figure === 'X' ?
        (config.counter % 2 === 0 ? 'Player 2' : 'Player 1') : (config.counter % 2 === 0 ? 'Player 1' : 'Player 2');

    const finish = useCallback(() => {
        setConfig(initialConfig);
        history.push('/');
    },[setConfig, history]);

    const init = useCallback( () => {
        setConfig({
            ...config,
            counter: 1,
        });
        setWinner(null);
    },[setConfig, config]);

    const setWinnerMemo = useCallback((value) => setWinner(value), [setWinner]);

    return (
        <div className={'page'}>
            <Header score={score} counter={config.counter} turn={turn}/>
            <Game config={config} setConfig={setConfig} turn={turn} setWinner={setWinnerMemo}/>
            {
                winner && <PlayOneMore finish={ finish } winner={ winner } init={ init }/>
            }
            <span className={styles.exit} onClick={ finish }>Exit</span>
        </div>
    );
}

export default GamePage;