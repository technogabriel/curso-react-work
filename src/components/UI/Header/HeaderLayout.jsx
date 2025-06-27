import React from 'react'
import Theme from '../Theme/Theme'

const HeaderLayout = () => {
  return (
    <>
    
     <div className="header" style={{ marginBottom: '5px', padding: '5px' }}>
      <div className="container text-center">
        <h1>React Store</h1>      
        <p>Enjoy the fast shopping cart experience.</p>
      </div>
       <Theme/>
    </div>
    </>
  )
}

export default HeaderLayout