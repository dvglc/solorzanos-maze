import { shuffleFragmentsPositions } from './utils'

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

const stateData = {
    fragments: shuffleFragmentsPositions(rawFragments),
    blank: {
        row: 1,
        col: 1
    }
}

export default stateData
