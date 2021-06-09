import React from 'react'

function Square({value, onClick}) {

    const props = {
        onClick: () => 'function',
        value: 'X'
    }

    return (
        <>
            <button onClick={onClick}>
                {value}
            </button>
        </>
    )
}

export default Square