import React from 'react'
import styled from "styled-components";

const Box = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled('div')`
    font-size: 1.2rem;
    color: #8b8b97;
`

export default () => <Box><Text>Limpar filtros</Text></Box>