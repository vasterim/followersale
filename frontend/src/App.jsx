import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Packages from "./components/Packages"
import Testimonials from "./components/Testimonials"
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Header/>
        <Features/>
        <Testimonials/>
        <Packages/>
        <Footer/>
      </div>
    </>
  )
}

export default App
