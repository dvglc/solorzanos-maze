import { shuffleFragmentsPositions, getBlankFragment, isMovable } from './utils'

const rawFragments = [
    {
        id: '1a',
        img: '1A.jpg'
    },
    {
        id: '1b',
        img: '1B.jpg'
    },
    {
        id: '1c',
        img: '1C.jpg'
    },
    {
        id: '1d',
        img: '1D.jpg'
    },
    {
        id: '2a',
        img: '2A.jpg'
    },
    {
        id: '2b',
        img: '2B.jpg'
    },
    {
        id: '2c',
        img: '2C.jpg'
    },
    {
        id: '2d',
        img: '2D.jpg'
    },
    {
        id: '3a',
        img: '3A.jpg'
    },
    {
        id: '3b',
        img: '3B.jpg'
    },
    {
        id: '3c',
        img: '3C.jpg'
    },
    {
        id: '3d',
        img: '3D.jpg'
    },
    {
        id: '4a',
        img: '4A.jpg'
    },
    {
        id: '4b',
        img: '4B.jpg'
    },
    {
        id: '4c',
        img: '4C.jpg'
    },
    {
        id: '4d',
        img: '4D.jpg'
    }
]


export const initializeState = () => {
    const positionedFragments = shuffleFragmentsPositions(rawFragments)
    const blankFragment = getBlankFragment(positionedFragments)
    return {
        fragments: positionedFragments
            .filter(f => f.id !== blankFragment.id)
            .map(f => ({
                ...f,
                movable: isMovable(f.position, blankFragment.position)
            })),
        blank: blankFragment
    }
}
