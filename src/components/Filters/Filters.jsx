import React from 'react'
import styled from "styled-components";
import Line from '../Line/Line'
import CheckBox from '../CheckBox/CheckBox'
import WhereSelect from '../Selects/WhereSelect'
import BrandSelect from '../Selects/BrandSelect'
import ModelSelect from '../Selects/ModelSelect'
import DateSelect from '../Selects/DateSelect'
import VersionSelect from '../Selects/VersionSelect'
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch'
import CleanFilters from './CleanFilters'
import OffersButton from './OffersButton'
import PinIcon from './icone-pin.svg'



const Box = styled('div')`
    display: 'flex';
    backgroundColor: '#fff';
    width: '100%';
`
const Group = styled('span')`
    width: 29rem;
    display: flex;
    margin: 0 1rem;
    justify-content: space-between; 
`

const Filters = (props) => {
    const { tab } = props

    return (
        <Box>
            <Line width="100%" >
                <WhereSelect icon={PinIcon}/>
                <BrandSelect />
                <ModelSelect />
            </Line>
            <Line>
                <DateSelect description="Ano Desejado"/>
                <DateSelect description="Faixa de Preço"/>
                <VersionSelect />
            </Line>
            <Line justifyContent="space-between">
                <AdvancedSearch />
                <Group>
                    <CleanFilters />
                    <OffersButton />
                </Group>
            </Line>
        </Box>
    )
}

export default Filters