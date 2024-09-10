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
