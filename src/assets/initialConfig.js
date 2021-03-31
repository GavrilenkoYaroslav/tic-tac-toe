export const initialConfig = {
    init: null,
    AI_mode: null,
    player_1: {
        figure: null,
        score: null,
    },
    player_2: {
        figure: null,
        score: null,
    },
};

export const combinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [2, 4, 6],
];