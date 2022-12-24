import React from 'react'

const Brand = ({ text, children }) => {
    return (
        <div className='container brand'>
            <h2>{text}</h2>
            {children}
        </div>
    )
}

export default Brand