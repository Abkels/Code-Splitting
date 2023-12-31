import React from 'react'
import logo from '../logo.svg'

const Page2 = ({onRouteChange}) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt="logo" />
        <h1 className='App-title'>Hello</h1>
      </header>
      <button onClick={()=> onRouteChange('page2')}>Page1</button>
      <button onClick={()=> onRouteChange('page3')}>Page3</button>
    </div>
  )
}

export default Page2