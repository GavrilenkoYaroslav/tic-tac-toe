export const findWinner = ( array ) => {
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