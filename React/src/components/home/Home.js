import React from 'react'
import {Route} from 'react-router-dom'
import Operations from '../operations/Operations'

import SliderSection from './SliderSection'
import BalanceSection from './BalanceSection'
import LastOperations from './LastOperations'


function Home() {
    return (
        <main>
            <SliderSection />
            <BalanceSection />
            <LastOperations />
            <Route path='/operations' component={Operations} />
        </main>
    )
}

export default Home;