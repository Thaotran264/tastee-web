import React from 'react'
import Footer from '../Footer'
import Header from '../Header/Header'

const MainLayOut = ({ children }) => {
    return (
        <div className='layout d-flex flex-column justify-content-between '>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayOut