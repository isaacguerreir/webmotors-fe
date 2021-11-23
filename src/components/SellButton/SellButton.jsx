import React, { useState } from 'react'
import { TAB } from '../Tabs/Tabs'

const box = {
    display: 'flex',
    alignItems: 'center'
}

const button = {
    height: '3rem',
    boxSizing: 'border-box',
    borderRadius: '3px',
    borderWidth: '0.2rem',
    borderStyle: 'solid',
    borderColor: '#f89e00',
    color: '#f89e00',
    float: 'right',
    width: '15rem',
    margin: '0 1rem',
    lineHeight: '38px',
    fontWeight: 'bold',
    fontSize: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const selected = {
    color: 'white',
    backgroundColor: '#f89e00'
}

const SellButton = (props) => {
    const [ hover, setHover ] = useState(false);
    const tab = props.tab

    const description = (tab) => `Vender ${tab}`
    const descriptionByTab = (tab) => {
        switch (tab) {
            case TAB.CARRO:
                return description("meu carro")
            case TAB.MOTO:
                return description("minha moto")
            default:
                return ""
        }
    }

    const onMouseEnter = () => setHover(true)
    const onMouseLeave = () => setHover(false)

    const isHover = () => hover ? Object.assign({}, button, selected) : button

    return (
        <div
            style={box}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={isHover()}>
                {descriptionByTab(tab)}
            </div>
        </div>
    )
    
}

export default SellButton