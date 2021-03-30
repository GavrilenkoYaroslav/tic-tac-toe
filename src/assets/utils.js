export const findWinner = (array) => {
    const combinations = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
        let [a, b, c] = combinations[i];
        if (array[a] && array[a] === array[b] && array[a] === array[c]) {
            return combinations[i];
        }
    }
    return null;
}
export const findStrategy = (array, playerFigure, computerFigure) => {
    const combinations = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [6, 7, 8],
        [3, 4, 5],
        [2, 4, 6],
    ];

    const showMeWereToGo = (figure) => {
        let resultArray = [];
        for (let i = 0; i < combinations.length; i++) {
            let [a, b, c] = combinations[i];
            if ((array[a] || array[b] || array[c]) && (
                (array[a] === figure && array[b] === figure) ||
                (array[b] === figure && array[c] === figure) ||
                (array[a] === figure && array[c] === figure))) {
                const filtered = [a, b, c].filter(el => array[el] === null);
                if (filtered.length) {
                    resultArray.push(filtered[0]);
                }
            }
        }
        return resultArray;
    }

    let goHereAndYouWillWin = showMeWereToGo(computerFigure);
    let conterAttack;
    let anywhere = [];

    if (!goHereAndYouWillWin.length) {
        conterAttack = showMeWereToGo(playerFigure);
        if (!conterAttack.length) {
            for (let i = 0; i < array.length; i++) {
                array[i] === null && anywhere.push(i);
            }
        }
    }
    return goHereAndYouWillWin.length ? goHereAndYouWillWin : conterAttack.length ? conterAttack : anywhere;
}

export const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}