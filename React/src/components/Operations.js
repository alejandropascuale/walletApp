import React from 'react'
import Header from './header/Header';
import FormSearch from './FormSearch';
import BalanceSection from './BalanceSection'
import OperationsDetail from './OperationsDetail'
import Footer from './Footer';



function Operations() {
    
    return (
        <>
            <Header />
            <FormSearch />
            <BalanceSection />
            <OperationsDetail />
            <Footer />
        </>
    )
}

export default Operations;