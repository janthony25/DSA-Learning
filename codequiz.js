const box = [
    ['#', '#', '-', '-', '-', '-', '-'],
    ['#', '#', '#', '-', '-', '-', '-'],
    ['#', '#', '#', '-', '-', '#', '-']
  ];


  function rotateTheBox(box) {
    const m = box.length; // rows
    const n = box[0].length; // columns

    // 1. Create empty rotated box
    let rotated = [];
    for (let i = 0; i < n; i++) {
        let newRow = [];
        for (let j = 0; j < m; j++) {
            newRow.push('.');
        }
        rotated.push(newRow);
    }

    // 2. Rotate 90 degrees clockwise
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][m - 1 - i] = box[i][j];
        }
    }

    // 3. Simulate gravity
    for (let col = 0; col < rotated[0].length; col++) { // col = 0 to 2
        let emptyRow = rotated.length - 1; // start from bottom
        for (let row = rotated.length - 1; row >= 0; row--) {
            if (rotated[row][col] === '*') {
                emptyRow = row - 1; // reset emptyRow above the obstacle
            } else if (rotated[row][col] === '#') {
                if (row !== emptyRow) {
                    rotated[emptyRow][col] = '#';
                    rotated[row][col] = '.';
                }
                emptyRow--;
            }
        }
    }

    return rotated;
}


console.log(rotateTheBox(box))