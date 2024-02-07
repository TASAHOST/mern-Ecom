import React from 'react'
import Banner from '../components/Banner'
import Categories from './Categories'
import SpecialProduct from './SpecialProduct'
import OurServices from './OurServices'
import TestImonials from './TestImonials'


const Home = () => {
  return (
    <div>
        <Banner />
        <Categories />
        <SpecialProduct />
        <TestImonials />
        <OurServices />
    </div>
  )
}

export default Home