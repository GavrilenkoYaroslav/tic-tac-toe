import React, {useState, useCallback, useEffect} from 'react';
import {Box} from "./Box";
import {findStrategy, findWinner, random} from "../assets/utils";

export const Game = ({config, setConfig, turn, setWinner, setCounter, winner}) => {
    const [field, setField] = useState(new Array(9).fill(null));

    const markBoxMemo = useCallback((index) => {
        if (field[index]) return;

        setField((prev) => {
            const next = [...prev];
            next[index] = turn === 'Player 1' ? config.player_1.figure : config.player_2.figure;
            return next;
        });
        setCounter(prev => prev !== 9 ? prev + 1 : null);
        const nextRenderField = [...field];
        nextRenderField[index] = turn === 'Player 1' ? config.player_1.figure : config.player_2.figure;
        const haveMoreBoxes = nextRenderField.includes(null);
        if (!haveMoreBoxes) {
            setWinner('Nobody won');
            setField(new Array(9).fill(null));
        }
        const combination = findWinner(nextRenderField);
        if (combination) {
            const figure = nextRenderField[combination[0]];
            const winner = config.player_1.figure === figure ? 'Player 1' : 'Player 2';
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
            setCounter(null);
            setField(new Array(9).fill(null));
        }
    }, [setCounter, config, turn, field, setConfig, setWinner])

    useEffect(() => {
        let timeout;
        if (config.AI_mode && turn === 'Player 2' && !winner) {
            const whereToGo = findStrategy(field, config.player_1.figure, config.player_2.figure);
            const i = random(0, whereToGo.length - 1);
            timeout = setTimeout(() => markBoxMemo(whereToGo[i]), random(300, 2000));
        }

        return () => timeout && clearTimeout(timeout);
    }, [winner, turn, config, field, markBoxMemo])


    return (
        <div className={'field'}>
            {
                field.map((figure, i) => <Box value={figure} index={i} turn={turn}
                                              AI={config.AI_mode} markBox={markBoxMemo}
                                              key={i} field={field}/>)
            }
        </div>
    );
}