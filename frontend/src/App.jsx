import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import InstagramLikes from './components/InstagramLikes'
import InstagramFollowers from './components/InstagramFollowers'
import InstagramViews from './components/InstagramViews'
import TikTokLikes from './components/TikTokLikes'
import TikTokFollowers from './components/TikTokFollowers'
import TikTokViews from './components/TikTokViews'
import Footer from './components/Footer'
import Features from './components/Features'
import Header from './components/Header'

function App() {
  return (
    <Router basename="/dist">
      <div className="min-h-screen bg-white">
        <TopBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Features />
            </>
          } />
          <Route path="/instagram/likes" element={<InstagramLikes />} />
          <Route path="/instagram/followers" element={<InstagramFollowers />} />
          <Route path="/instagram/views" element={<InstagramViews />} />
          <Route path="/tiktok/likes" element={<TikTokLikes />} />
          <Route path="/tiktok/followers" element={<TikTokFollowers />} />
          <Route path="/tiktok/views" element={<TikTokViews />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
