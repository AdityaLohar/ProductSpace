import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import '@fontsource/montserrat';
import '@fontsource/hind-madurai';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div>
      <Navbar />
      <BottomBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
