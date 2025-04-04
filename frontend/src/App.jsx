import { useState } from 'react'
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import TopBanner from "./components/TopBanner"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navbar />
      <Header />
      <Features/>
      <Footer/>
    </div>
  )
}

export default App
