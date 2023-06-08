import React from 'react'
import Nav from './components/jsx_files/Nav'
import './App.css'
import Banner from './components/jsx_files/Banner'

function App() {
  return (
    <div>
      {/* Navigation Bar: will be routed to every page */}
      <Nav/>
      <Banner/>
    </div>
  )
}

export default App
