import React, { useState, useCallback, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Header } from '../components/Header';
import { Game } from '../components/Game';
import { PlayOneMore } from '../components/PlayOneMore';
import { initialConfig } from '../assets/initialConfig';
import styles from '../assets/css/GamePage.module.css';

const GamePage = ({ config, setConfig }) => {
	const gameRef = useRef();
	const history = useHistory();
	const [ winner, setWinner ] = useState(null);
	const [ counter, setCounter ] = useState(0);
	const [ turn, setTurn ] = useState(null);

	const score = `${config.player_1.score} / ${config.player_2.score}`;

	const finish = useCallback(() => {
		setConfig(initialConfig);
		history.push('/');
	}, [ setConfig, history ]);

	const initNewGame = useCallback(() => {
		setWinner(null);
		setCounter(0);
		gameRef.current.init();
	}, [ setWinner ]);

	const onComplete = useCallback((figure) => {
		let winner = 'Nobody won';

		if ( figure ) {
			winner = config.player_1.figure === figure ? 'Player 1' : 'Player 2';
		}

		setWinner(winner);
		setConfig({
			...config,
			player_1: {
				...config.player_1,
				score: winner === 'Player 1' ? config.player_1.score + 1 : config.player_1.score,
			},
			player_2: {
				...config.player_2,
				score: winner === 'Player 2' ? config.player_2.score + 1 : config.player_2.score,
			},
		});
	}, [ setConfig, config ]);

	const sync = useCallback((nextTurnPlayer, counter) => {
		setCounter(counter);
		setTurn(nextTurnPlayer === config.player_1 ? 'Player 1' : 'Player 2');
	}, [config, setCounter, setTurn ]);

	return !config.init ? <Redirect to={'/'}/> : (
		<div className={'page'}>
			<Header score={score} counter={counter} turn={turn}/>
			<Game ref={gameRef}
			      AI={config.AI_mode}
			      players={[ config.player_1, config.player_2 ]}
			      onComplete={onComplete}
			      sync={sync}
			/>
			{
				winner && <PlayOneMore finish={finish} AI={config.AI_mode}
				                       winner={winner}
				                       initNewGame={initNewGame}/>
			}
			<span className={styles.exit} onClick={finish}>Exit</span>
		</div>
	);
};

export default GamePage;
