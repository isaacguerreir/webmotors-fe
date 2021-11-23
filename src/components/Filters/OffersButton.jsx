import React from 'react'
import styled from "styled-components";

const Box = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 21rem;
    background-color: #cc2929;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 3px;

`

const OffersButton = () => {
    return(
        <Box>
            Ver ofertas
        </Box>
    )
}

export default OffersButton