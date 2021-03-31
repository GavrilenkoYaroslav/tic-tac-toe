import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useState} from 'react';
import {findStrategy, findWinner, random} from '../assets/utils';
import {Box} from './Box';

export const Game = forwardRef((props, ref) => {
    const {AI, players, onComplete, sync} = props;
    const initialGameConfig = {
        counter: 0,
        field: new Array(9).fill(null),
        finished: false,
    };
    const [game, setGame] = useState(initialGameConfig);

    useImperativeHandle(ref, () => ({
        init() {
            setGame(initialGameConfig);
        },
    }));

    let player;
    if (players[0].figure === 'X') {
        player = game.counter % 2 === 0 ? players[0] : players[1];
    } else {
        player = game.counter % 2 === 0 ? players[1] : players[0];
    }

    const markBox = useCallback((index) => {
        if (game.field[index]) return;

        setGame((prev) => {
            const next = {...prev, counter: prev.counter + 1, field: [...prev.field]};
            next.field[index] = player.figure;
            return next;
        });
    }, [player, game, setGame]);

    useEffect(() => {
		sync && sync(player, game.counter)
    }, [sync, player, game.counter])

    useEffect(() => {
        if (!AI || player !== players[1] || game.finished) {
            return;
        }

        const whereToGo = findStrategy(game.field, players[0].figure, players[1].figure);
        const i = random(0, whereToGo.length - 1);
        const timeout = setTimeout(() => markBox(whereToGo[i]), random(300, 2000));

        return () => clearTimeout(timeout);
    }, [game, player, AI, markBox, players]);

    useEffect(() => {
        if (game.finished) return;

        const combination = findWinner(game.field);
        if (combination) {
            const figure = game.field[combination[0]];
            setGame({
                ...game,
                finished: true,
            });
            return onComplete && onComplete(figure);
        }

        const haveMoreBoxes = game.field.includes(null);
        if (!haveMoreBoxes) {
            setGame({
                ...game,
                finished: true,
            });
            return onComplete && onComplete();
        }
    }, [game, setGame, onComplete]);


    return (
        <div className={'field'}>
            {
                game.field.map((figure, i) => (
                    <Box value={figure}
                         index={i}
                         key={i}
                         markBox={AI && player === players[1] ? null : markBox}
                    />
                ))
            }
        </div>
    );
});
