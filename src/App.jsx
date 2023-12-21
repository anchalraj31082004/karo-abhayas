import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components'

const App = () => {
  return (
   <>
   <Header/>
   <div className='min-h-screen'>
   <Outlet/>
   </div>
   <Footer/>
   </>
  )
}

export default App