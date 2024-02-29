const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumRow(row) {
    return new Promise((resolve) => {
        let sum = 0;
        for (let i = 0; i < row.length; i++) {
            sum += row[i];
        }
        resolve(sum);
    });
}

function sum2DArrayConcurrently(array2D) {
    const promises = array2D.map(row => sumRow(row));
    return Promise.all(promises)
        .then(sums => sums.reduce((a, b) => a + b, 0));
}

sum2DArrayConcurrently(array2D)
    .then(totalSum => console.log("Total Sum:", totalSum))
    .catch(error => console.error("Error:", error));
