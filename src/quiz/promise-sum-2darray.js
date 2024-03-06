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

async function sum2DArrayConcurrently(array2D) {
    const promises = array2D.map(row => sumRow(row));
    const sums = await Promise.all(promises);
    return sums.reduce((a, b) => a + b, 0);
}

// Using the function with async/await
(async () => {
    try {
        const totalSum = await sum2DArrayConcurrently(array2D);
        console.log("Total Sum:", totalSum);
    } catch (error) {
        console.error("Error:", error);
    }
})();
