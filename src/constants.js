const actionC = {
    MOVE_FRAGMENT: "MOVE_FRAGMENT",
    MSG_UNMOVABLE_FRAGMENT: "MSG_UNMOVABLE_FRAGMENT"
}

const gridC = {
    GRID_ROWS: '4',
    GRID_COLUMNS: '4',
    GRID_HEIGHT: 600,
    GRID_WIDTH: 600
}

const fragmentC = {
    BLANK_FRAGMENT: '4d'
}

const constants = {
    ...actionC,
    ...gridC,
    ...fragmentC
}

export default constants