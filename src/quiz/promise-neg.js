const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkRowForNegative(row, rowIndex) {
    return new Promise((resolve) => {
        if (row.some(number => number < 0)) {
            resolve(`Row ${rowIndex} contains a negative number.`);
        } else {
            resolve(null);
        }
    });
}

function logNegativeRows(array2D) {
    const promises = array2D.map((row, index) => checkRowForNegative(row, index));
    Promise.all(promises)
        .then(results => {
            results.forEach(result => {
                if (result) {
                    console.log(result);
                }
            });
        });
}

logNegativeRows(array2D);
