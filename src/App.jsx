import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import '@fontsource/montserrat';
import '@fontsource/hind-madurai';
import PmFellowship from './pages/PmFellowship';
import FaqPage from './pages/FaqPage';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/pm' element={<PmFellowship />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

{/* <svg width="200" height="200" viewBox="0 0 100 100" style={{ padding: '2px' }}>
        <path
          d="M50,50 L100,65 A48,50 100 0,1 73,97 Z"
          fill={isActive ? 'green' : 'red'}
          stroke="white" // To create a gap between the arcs
          strokeWidth="2" // The gap size
        />
      </svg> */}
