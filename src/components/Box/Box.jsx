import React from 'react'

const box = {
    maxHeight: '312px',
    maxWidth: '933px'
}

const Box = (props) => <div style={box}> {props.children} </div>

export default Box