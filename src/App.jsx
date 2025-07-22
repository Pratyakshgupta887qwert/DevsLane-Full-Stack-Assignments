import React , { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import { Routes , Route} from 'react-router-dom'
import ProductListPage from './ProductListPage'
import Details from './Details'



function App() {

  const path = window.location.pathname;

  return (
        <>
        <div className='bg-gray-300'>
          <Header />
          <Routes>
            <Route index element={<ProductListPage />}></Route>
            <Route path='/productdetails' element={<Details />}></Route>
          </Routes>
          <Footer />
          </div>
        </>
  );
}
export default App
