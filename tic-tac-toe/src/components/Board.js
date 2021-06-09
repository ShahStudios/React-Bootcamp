import React from 'react'

import Square from '../components/Square'

function Board({squares, onClick}) {
    return (
        <div className="board-layout">
            <Square value='1' onClick={() => onClick("dummy-text")}/>
            <Square value='2' onClick={() => onClick("dummy-text")}/>
            <Square value='3' onClick={() => onClick("dummy-text")}/>
            <Square value='4' onClick={() => onClick("dummy-text")}/>
            <Square value='5' onClick={() => onClick("dummy-text")}/>
            <Square value='6' onClick={() => onClick("dummy-text")}/>
            <Square value='7' onClick={() => onClick("dummy-text")}/>
            <Square value='8' onClick={() => onClick("dummy-text")}/>
            <Square value='9' onClick={() => onClick("dummy-text")}/>
        </div>
    )
}

export default Board