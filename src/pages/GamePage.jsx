import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {Header} from "../components/Header";
import {Game} from "../components/Game";
import styles from '../assets/css/GamePage.module.css';
import {initialConfig} from "../assets/initialConfig";
import {PlayOneMore} from "../components/PlayOneMore";

const GamePage = ({config, setConfig}) => {
    const [winner, setWinner] = useState(null);
    const [counter, setCounter] = useState(1);
    const history = useHistory();
    !config.init && history.push('/');

    const score = `${config.player_1.score} / ${config.player_2.score}`;
    const turn = config.player_1.figure === 'X' ?
        (counter % 2 === 0 ? 'Player 2' : 'Player 1') : (counter % 2 === 0 ? 'Player 1' : 'Player 2');

    const finish = useCallback(() => {
        setConfig(initialConfig);
        history.push('/');
    }, [setConfig, history]);

    const initNewGame = useCallback(() => {
        setCounter(1);
        setWinner(null);
    }, [setCounter, setWinner]);

    const setWinnerMemo = useCallback(value => setWinner(value), [setWinner]);
    const setCounterMemo = useCallback(value => setCounter(value), [setCounter]);

    return (
        <div className={'page'}>
            <Header score={score} counter={counter} turn={turn}/>
            <Game config={config} setConfig={setConfig} winner={winner}
                  turn={turn} setWinner={setWinnerMemo} setCounter={setCounterMemo}/>
            {
                winner && <PlayOneMore finish={finish} winner={winner} initNewGame={initNewGame}/>
            }
            <span className={styles.exit} onClick={finish}>Exit</span>
        </div>
    );
}

export default GamePage;