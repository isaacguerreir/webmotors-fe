import React, { useContext } from 'react'
import styled from "styled-components";
import AppContext from '../AppContext/context';
import { TAB } from '../Tabs/Tabs'
import iconeCarro from './iconeCarro.svg'
import iconeMoto from './iconeMoto.svg'


const Box = styled('div')`
    display: flex,
    justify-content: space-between,
    width: 30%
`

const tabs = {
    display: 'flex',
    height: '4rem',
    margin: '1rem',
    width: '100%',
    padding: '0 1rem'
}

const selected = {
    borderBottom: '5px solid #cc2929'
}

const icon = {
    height: '1rem'
}

const iconBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '1rem'
}

const description = {
    display: 'flex',
    flexDirection: 'column',
    textTransform: 'uppercase'
}

const buy = {
    fontSize: '0.8rem'
}

const category = {
    fontSize: '1.9rem'
}

const TabSwitch = () => {
    const { tab, dispatchTabEvent } = useContext(AppContext)

    const selectCarro = () => dispatchTabEvent('CARRO_CLICK');
    const selectMoto = () => dispatchTabEvent('MOTO_CLICK');

    const tabIsSelected = (type, tab) => {
        return tab == type ? Object.assign({}, selected, tabs) : tabs
    }

    return(
        <Box>
            {/* Guia para selecionar a opção de carros */}
            <div
                style={tabIsSelected(TAB.CARRO, tab)}
                onClick={selectCarro}
            >
                <div style={iconBox}>
                    <img style={icon} src={iconeCarro}/>
                </div> 
                <div style={description}>
                    <div style={buy}>Comprar</div>
                    <div style={category}>Carros</div>
                </div>
            </div>

            {/* Guia para selecionar a opção de motos */}
            <div
                style={tabIsSelected(TAB.MOTO, tab)}
                onClick={selectMoto}
            >
                <div style={iconBox}>
                    <img style={icon} src={iconeMoto}/>
                </div> 
                <div style={description}>
                    <div style={buy}>Comprar</div>
                    <div style={category}>Motos</div>
                </div>
            </div>
        </Box>
    )
}

export default TabSwitch