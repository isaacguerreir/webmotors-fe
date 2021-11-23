import React from 'react'

const box = {
    display: 'flex'
}

const Line = (props) => {
    const { justifyContent, width } = props

    return (
        <div style={{ justifyContent, width, ...box }}>
            { props.children }
        </div>
    )
}

export default Line