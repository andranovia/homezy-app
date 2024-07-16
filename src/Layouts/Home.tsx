import React from 'react'
import Navigation from '../components/Navigation/Index'
import Footer from '../components/Footer/Footer'

const HomeLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='container'>
        <Navigation/>
        <div className='home__section'>
        {children}
        </div>
      <Footer/>
        
    </div>
  )
}

export default HomeLayout