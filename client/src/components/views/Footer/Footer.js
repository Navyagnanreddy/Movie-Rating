import React from 'react'

function Footer() {
    return (
        <div style={{
            backgroundColor: 'lightblue',
            color: 'black',
            fontWeight: 'bolder',
            height: '72px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem'
        }}>
            <p> @Navya - {new Date().getFullYear()} </p>
        </div>
    )
}

export default Footer