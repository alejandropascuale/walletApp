import React from 'react'

import Header from '../Header';
import FormSearch from '../FormSearch';
import SliderSection from './SliderSection'
import BalanceSection from './BalanceSection'
import LastOperations from './LastOperations'
import Footer from '../Footer';


function Home() {
    return (
        <>
            <Header />
            <FormSearch />
            <SliderSection />
            <BalanceSection />
            <LastOperations />
            <Footer />
        </>
    )
}

export default Home;