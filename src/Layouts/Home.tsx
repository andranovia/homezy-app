import React from 'react'
import Navigation from '../components/Navigation/Index'

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='container'>
        <Navigation/>
        <div className='home__section'>
        {children}
        </div>
    </div>
  )
}

export default HomeLayout