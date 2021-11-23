import React from 'react'
import Logo from './logoWebmotors.png'

const box = {
    margin: '3rem 1rem'
}

const image = {
    width: '14rem'
}

const Header = () => {
    return(
        <div style={box}>
            <img style={image} src={Logo}/>
        </div>
    )
}
export default Header