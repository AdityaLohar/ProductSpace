import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import '@fontsource/montserrat';
import '@fontsource/hind-madurai';
import PmFellowship from './pages/PmFellowship';
import CircleAnimation from './pages/CircleAnimation';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/pm' element={<PmFellowship />} /> */}
          {/* <Route path='/circle' element={<CircleAnimation />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
