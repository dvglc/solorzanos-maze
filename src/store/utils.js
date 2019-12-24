
/**
 * Util Functions
 */ 


 /**
  * Adds a random position to each fragment, or replaces its already existing 
  * position by a new random position.
  * @param {Array} fragments An array of fragment objects
  */
export const shuffleFragmentsPositions = (fragments) => {
    let newPositions = generateRandomPositions(4,4)
    return fragments.map((f, i) => {
        f.position = newPositions[i]
        return f
    })
}


/**
 * Creates a list of random positions in a x*y grid.
 * @param {number} x The number of rows in the grid.
 * @param {number} y The number of columns.
 */
const generateRandomPositions = (x, y) => {
    // initialize positions...
    let positions = []
    for (let i=1; i<=x; i++) {
        for (let j=1; j<=y; j++) {
            positions.push({row: i, col: j})
        }
    }
    // ... and shuffle them
    for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    return positions
}


/**
 * Checks whether a fragment can be moved. A fragment can be moved exactly when it is next to a target (empty) field on the grid. 
 * @param {Object} currentPos the current position of the fragment
 * @param {Object} targetPos the position of the target field on the grid
 */
export const isMovable = (currentPos, targetPos) => {
    let possibleRows = [currentPos.row - 1, currentPos.row + 1]
    let possibleCols = [currentPos.col - 1, currentPos.col + 1]
    return possibleRows.includes(targetPos.row) && possibleCols.includes(targetPos.col)
}
