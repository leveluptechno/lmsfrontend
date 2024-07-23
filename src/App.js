import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './components/Layout'
import Aboutpage from './pages/Aboutpage'
import PsychometricTestPage from './pages/PsychometricTestPage'
import ContactForm from './pages/ContactFormPage'

const App = () => {
  return (
   <>
   <Router>
    <Layout>
    <Routes>
      <Route index path='/' element={<Homepage/>}/>
      <Route path='/about' element={<Aboutpage/>}/>
      <Route path='/psychometrictest' element={<PsychometricTestPage/>}/>
      <Route path='/contactform' element={<ContactForm/>}/>
    </Routes>
    </Layout>
   </Router>
   </>
  )
}

export default App