import React from 'react'
import Navbar from './Components/NvaBar/Navbar'
import Banner from './Components/Banner/Banner'
import './App.css'
import RowPost from './Components/RowPost/RowPost'
import {action,orginals,comedyMovies,horrorMovies} from './urls'
function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Banner></Banner>
      <RowPost url={orginals} title='Netflix Orginals'></RowPost>
      <RowPost url={action} title='Action Movies' isSmall></RowPost>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall></RowPost>
      <RowPost url={horrorMovies} title='Horror Movies' isSmall></RowPost>



    </div>
  )
}

export default App