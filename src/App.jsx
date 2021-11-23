import React, { useState } from 'react'
import Header from './components/Header/Header'
import TabSwitch from './components/TabSwitch/TabSwitch'
import SellButton from './components/SellButton/SellButton'
import Filters from './components/Filters/Filters'
import Box from './components/Box/Box'
import Line from './components/Line/Line'
import AppContext from './components/AppContext/context'
import { TAB } from './components/Tabs/Tabs'


const App = () => {
  const [ tab, setTab ] = useState(TAB.CARRO);

  const dispatchTabEvent = (actionType, payload) => {
		switch (actionType) {
			case 'CARRO_CLICK':
				setTab(TAB.CARRO);
				return;
			case 'MOTO_CLICK':
				setTab(TAB.MOTO);
				return;
			default:
				return;
		}
	};

  return (
    <Box>
    <AppContext.Provider value={{ tab, dispatchTabEvent }}>
      <Header />
      <Line justifyContent="space-between">
        <TabSwitch />
        <SellButton tab={tab}/>
      </Line>
      <Filters />
    </AppContext.Provider>
    </Box>
    
  )
}

export default App