import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './homepage';
import Demo from './demo';
import BecomePartner from './components/BecomePartner';
import Contact from './components/Contact';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/demo' element={<Demo />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/devenir-partenaire' element={<BecomePartner />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
