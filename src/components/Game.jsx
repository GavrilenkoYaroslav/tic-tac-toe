import React, { useState, useCallback, useEffect } from 'react';
import {Box} from "./Box";
import {findWinner} from "../assets/findWinner";

export const Game = ({config, setConfig, turn, setWinner}) => {
    const [field, setField] = useState(new Array(9).fill(null));

    useEffect(() => {
        const movesToFinish = field.filter(el => el === null).length;
        if (!movesToFinish) {
            setWinner('Nobody won');
            setField(new Array(9).fill(null));
            setConfig({
                ...config,
                counter: 1,
            })
        }
        const combination = findWinner(field);
        if ( combination ) {
            const figure = field[combination[0]];
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
                counter: 1,
            });
            setField(new Array(9).fill(null));
        }

    }, [field, setWinner, config, setConfig]);

    const markBoxMemo = useCallback((index) => {
        if ( field[index] ) return;

        setField( (prev) => {
            const next = [...prev];
            next[index] = turn === 'Player 1' ? config.player_1.figure : config.player_2.figure;
            return next;
        });
        setConfig({ ...config, counter: config.counter + 1 })
    }, [config, setConfig, turn, field])

    return (
       <div className={'field'}>
           {
               field.map((figure, i) => <Box value={figure} index={i}
                                             markBox={markBoxMemo} key={i} field={field}/>)
           }
       </div>
    );
}