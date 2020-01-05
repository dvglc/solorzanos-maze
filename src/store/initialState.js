import { 
    shuffleFragmentsPositions, 
    getBlankFragment, 
    isMovable, 
    positionsEqual } 
from './utils'

const rawFragments = [
    {
        id: '1a',
        img: '1A.jpg',
        finalPosition: {
            row: 0,
            col: 0
        }
    },
    {
        id: '1b',
        img: '1B.jpg',
        finalPosition: {
            row: 0,
            col: 1
        }
    },
    {
        id: '1c',
        img: '1C.jpg',
        finalPosition: {
            row: 0,
            col: 2
        }
    },
    {
        id: '1d',
        img: '1D.jpg',
        finalPosition: {
            row: 0,
            col: 3
        }
    },
    {
        id: '2a',
        img: '2A.jpg',
        finalPosition: {
            row: 1,
            col: 0
        }
    },
    {
        id: '2b',
        img: '2B.jpg',
        finalPosition: {
            row: 1,
            col: 1
        }
    },
    {
        id: '2c',
        img: '2C.jpg',
        finalPosition: {
            row: 1,
            col: 2
        }
    },
    {
        id: '2d',
        img: '2D.jpg',
        finalPosition: {
            row: 1,
            col: 3
        }
    },
    {
        id: '3a',
        img: '3A.jpg',
        finalPosition: {
            row: 2,
            col: 0
        }
    },
    {
        id: '3b',
        img: '3B.jpg',
        finalPosition: {
            row: 2,
            col: 1
        }
    },
    {
        id: '3c',
        img: '3C.jpg',
        finalPosition: {
            row: 2,
            col: 2
        }
    },
    {
        id: '3d',
        img: '3D.jpg',
        finalPosition: {
            row: 2,
            col: 3
        }
    },
    {
        id: '4a',
        img: '4A.jpg',
        finalPosition: {
            row: 3,
            col: 0
        }
    },
    {
        id: '4b',
        img: '4B.jpg',
        finalPosition: {
            row: 3,
            col: 1
        }
    },
    {
        id: '4c',
        img: '4C.jpg',
        finalPosition: {
            row: 3,
            col: 2
        }
    },
    {
        id: '4d',
        img: '4D.jpg',
        finalPosition: {
            row: 3,
            col: 3
        }
    }
]

/**
 * (Re-)Initializes the state of the game.
 */
export const initializeState = () => {
    const positionedFragments = shuffleFragmentsPositions(rawFragments)
    const blankFragment = getBlankFragment(positionedFragments)
    const fullFragments = 
        positionedFragments
            .filter(f => f.id !== blankFragment.id)
            .map(f => ({
                ...f,
                movable: isMovable(f.position, blankFragment.position),
                correct: positionsEqual(f.position, f.finalPosition)
            }))
    return {
        fragments: fullFragments,
        blank: blankFragment,
        status: {
            moves: 0,
            missclicks: 0,
            correctFragments: fullFragments.filter(f => f.correct).length
        }
    }
}
