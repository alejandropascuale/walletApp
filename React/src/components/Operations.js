import React from 'react'
import Header from './header/Header';
import FormSearch from './FormSearch';
import BalanceSection from './BalanceSection'
import LastOperations from './LastOperations'
import Footer from './Footer';



function Operations() {
    return (
        <main>
            <Header />
            <FormSearch />
            <BalanceSection />
            <LastOperations />
            <Footer />
        </main>
    )
}

export default Operations;