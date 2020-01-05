const actionC = {
    MOVE_FRAGMENT: "MOVE_FRAGMENT",
    MISCLICK: "MISCLICK",
    RESTART_GAME: "RESTART_GAME",
    ENABLE_DEV_MODE: "ENABLE_DEV_MODE"
}

const gridC = {
    GRID_ROWS: '4',
    GRID_COLUMNS: '4',
    GRID_HEIGHT: 600,
    GRID_WIDTH: 600
}

const fragmentC = {
    BLANK_FRAGMENT_ID: '4d'
}

const aboutC = {
    NAME: "Solorzano's Maze",
    VERSION: "v1.0-RC",
    LINK: "https://www.github.com/dvglc/solorzanos-maze",
    FACS_LINK: "https://facs.salamanca.school/W0096/B/W0096-B-0051.jpg"
}

const constants = {
    ...actionC,
    ...gridC,
    ...fragmentC,
    ...aboutC
}

export default constants