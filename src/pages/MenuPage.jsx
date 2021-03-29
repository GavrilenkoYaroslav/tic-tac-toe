import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../assets/css/MenuPage.module.css';

export const MenuPage = ({setConfig}) => {
    const [AI_mode, setAI] = useState(null);
    const [showFigures, setShowFigures] = useState(false);
    const history = useHistory();

    const modeHandler = (e) => {
        const AI = Boolean(+e.currentTarget.attributes.datafld.value);
        setAI(AI);
        setShowFigures(true);
    }

    const setFigures = (e) => {
        const first_figure = e.currentTarget.attributes.datafld.value;
        const second_figure = first_figure === 'X' ? 'O' : 'X';
        setConfig({
            init: true,
            AI_mode,
            player_1: {
                figure: first_figure,
                score: 0,
            },
            player_2: {
                figure: second_figure,
                score: 0,
            },
            counter: 1,
        });
        history.push('/play');
    }

    return (
        <div className={'page'}>
        <div className={styles.menu}>
            <span className={styles.title}>Menu</span>

            <div>
                <button className={AI_mode === false ? styles.selected : ''} datafld={0} onClick={modeHandler}>
                    Play with friend
                </button>
                <button className={AI_mode === true ? styles.selected : ''} datafld={1} onClick={modeHandler}>
                    Play with computer
                </button>
            </div>

            {showFigures &&
            <div className={styles.figures}>
                <span>
                    {(AI_mode ? '' : '1st ') + 'Player'}
                </span>
                <button datafld={'X'} onClick={ setFigures }>
                    X
                </button>
                <button datafld={'O'} onClick={ setFigures }>
                    O
                </button>
            </div>
            }
        </div>
        </div>
    );
};