const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

async function sum2DArray(array2D) {
    const sumRow = async (row) => row.reduce((a, b) => a + b, 0);
    const rowSums = await Promise.all(array2D.map(row => sumRow(row)));
    return rowSums.reduce((total, current) => total + current, 0);
}

(async () => {
    const totalSum = await sum2DArray(array2D);
    console.log("Total Sum:", totalSum);
})();

