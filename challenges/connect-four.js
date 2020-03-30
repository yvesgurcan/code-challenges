/*
    Write a function to determine who is the winner of a Connect Four game. It returns false if nobody won. Otherwise, it returns A or B depending on which player has won.
*/

const PLAYER_A = 'A';
const PLAYER_B = 'B';
const EMPTY = ' ';
const NUMBER_OF_ROWS = 6;
const NUMBER_OF_COLUMNS = 7;
const NUMBER_OF_CELLS_TO_CONNECT = 4;

const EMPTY_GRID = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
];

const HORIZONTAL_WINNER = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [PLAYER_A, PLAYER_B, EMPTY, PLAYER_A, PLAYER_A, PLAYER_A, PLAYER_A],
    [PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_B, PLAYER_B]
];

const VERTICAL_WINNER = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A, EMPTY],
    [PLAYER_A, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A, EMPTY],
    [PLAYER_B, PLAYER_B, EMPTY, EMPTY, EMPTY, PLAYER_A, EMPTY],
    [PLAYER_B, PLAYER_A, EMPTY, EMPTY, PLAYER_B, PLAYER_B, PLAYER_B]
];

const UPWARD_DIAGONAL_WINNER = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, PLAYER_B, PLAYER_A, EMPTY, EMPTY],
    [EMPTY, EMPTY, PLAYER_B, PLAYER_B, PLAYER_B, EMPTY, EMPTY],
    [EMPTY, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A, EMPTY, EMPTY],
    [PLAYER_A, PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_A, PLAYER_A, EMPTY]
];

const DOWNARD_DIAGONAL_WINNER = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, PLAYER_A, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, PLAYER_B, PLAYER_A, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, PLAYER_B, PLAYER_A, PLAYER_A, EMPTY, EMPTY, EMPTY],
    [EMPTY, PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_A, PLAYER_B, EMPTY],
    [EMPTY, PLAYER_B, PLAYER_B, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A]
];

const DRAW = [
    [PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_B],
    [PLAYER_B, PLAYER_B, PLAYER_B, PLAYER_A, PLAYER_A, PLAYER_A, PLAYER_B],
    [PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A],
    [PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_B],
    [PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A, PLAYER_B],
    [PLAYER_A, PLAYER_B, PLAYER_B, PLAYER_B, PLAYER_A, PLAYER_B, PLAYER_A]
];

const EDGE_CASE_HORIZONTAL = [
    [EMPTY, EMPTY, EMPTY, PLAYER_A, PLAYER_A, PLAYER_A, PLAYER_A],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
];

const EDGE_CASE_VERTICAL = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A, PLAYER_A],
    [EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A, PLAYER_A, PLAYER_A]
];

const EDGE_CASE_UPWARD_DIAGONAL = [
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A, PLAYER_A],
    [EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_A, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, PLAYER_A, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
];
const EDGE_CASE_DOWNARD_DIAGONAL = [
    [EMPTY, EMPTY, EMPTY, PLAYER_B, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_B],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
];

const getCellOwner = function(cell) {
    switch (cell) {
        default: {
            return cell;
        }
        case EMPTY: {
            return false;
        }
    }
};

const cellsAreConnected = cells => {
    return (
        cells[0] === getCellOwner(cells[1]) &&
        cells[0] === getCellOwner(cells[2]) &&
        cells[0] === getCellOwner(cells[3])
    );
};

const connectedHorizontally = function(columnIndex, row) {
    // there are not 3 cells on the right of the cell at this index
    const columnOffset = columnIndex + NUMBER_OF_CELLS_TO_CONNECT;
    if (columnOffset > NUMBER_OF_COLUMNS) {
        return false;
    }

    const cells = [
        row[columnIndex],
        row[columnIndex + 1],
        row[columnIndex + 2],
        row[columnIndex + 3]
    ];

    return cellsAreConnected(cells) && cells[0];
};

const connectedVertically = function(rowIndex, columnIndex, grid) {
    // there are not 3 cells on top of the cell at this index
    const rowOffset = rowIndex - NUMBER_OF_CELLS_TO_CONNECT + 1;
    if (rowOffset < 0) {
        return false;
    }

    const cells = [
        grid[rowIndex][columnIndex],
        grid[rowIndex - 1][columnIndex],
        grid[rowIndex - 2][columnIndex],
        grid[rowIndex - 3][columnIndex]
    ];

    return cellsAreConnected(cells) && cells[0];
};

const connectedUpwardDiagonally = function(rowIndex, columnIndex, grid) {
    // there are not 3 cells on top of the cell at this index
    // there are not 3 cells on the rigth of the cell at this index
    const rowOffset = rowIndex - NUMBER_OF_CELLS_TO_CONNECT + 1;
    const columnOffset = columnIndex + NUMBER_OF_CELLS_TO_CONNECT;
    if (rowOffset < 0 || columnOffset > NUMBER_OF_COLUMNS) {
        return false;
    }

    const cells = [
        grid[rowIndex][columnIndex],
        grid[rowIndex - 1][columnIndex + 1],
        grid[rowIndex - 2][columnIndex + 2],
        grid[rowIndex - 3][columnIndex + 3]
    ];

    return cellsAreConnected(cells) && cells[0];
};

const connectedDownardDiagonally = function(rowIndex, columnIndex, grid) {
    // there are not 3 cells on top of the cell at this index
    // there are not 3 cells on the rigth of the cell at this index
    const rowOffset = rowIndex - NUMBER_OF_CELLS_TO_CONNECT + 1;
    const columnOffset = columnIndex + NUMBER_OF_CELLS_TO_CONNECT;
    if (rowOffset < 0 || columnOffset > NUMBER_OF_COLUMNS) {
        return false;
    }

    const cells = [
        grid[rowIndex][columnIndex + 3],
        grid[rowIndex - 1][columnIndex + 2],
        grid[rowIndex - 2][columnIndex + 1],
        grid[rowIndex - 3][columnIndex]
    ];

    return cellsAreConnected(cells) && cells[0];
};

const getWinner = function(grid = EMPTY_GRID) {
    console.table(grid);
    for (let i = NUMBER_OF_ROWS - 1; i >= 0; i--) {
        const row = grid[i];
        const rowIsEmpty = !row.filter(cell => cell !== EMPTY);

        if (!rowIsEmpty) {
            for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
                const horizontalWinner = connectedHorizontally(j, row);
                if (horizontalWinner) {
                    return horizontalWinner;
                }

                const verticalWinner = connectedVertically(i, j, grid);
                if (verticalWinner) {
                    return verticalWinner;
                }

                const upwardDiagonalWinner = connectedUpwardDiagonally(
                    i,
                    j,
                    grid
                );
                if (upwardDiagonalWinner) {
                    return upwardDiagonalWinner;
                }

                const downardDiagonalWinner = connectedDownardDiagonally(
                    i,
                    j,
                    grid
                );
                if (downardDiagonalWinner) {
                    return downardDiagonalWinner;
                }
            }
        }
    }

    return false;
};

// pass a grid as an argument to get which player won if any
const winner = getWinner(HORIZONTAL_WINNER);
switch (winner) {
    default: {
        console.log(`The winner is player ${winner}.`);
        break;
    }
    case false: {
        console.log('Nobody has won.');
        break;
    }
}
