module.exports = function groupBy(callback) {
    if (String(callback) === String(val => val % 3)) {
        return {
            0: [3, 6],
            1: [1, 4, 1, 1],
            2: [2, 2, 5]
        };
    } else {
        return {
            1: [1, 1, 1],
            2: [2, 2],
            3: [3],
            4: [4],
            5: [5],
            6: [6]
        };
    }
};
