import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './components/Layout'
import Aboutpage from './pages/Aboutpage'
import PsychometricTestPage from './pages/PsychometricTestPage'
import ContactForm from './pages/ContactFormPage'
import ResetPasswordPage from './pages/auth/ResetPasswordpage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordpage'
import SignupPage from './pages/user/Signuppage'
import LoginPage from './pages/auth/Loginpage'

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
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
      <Route path='/resetpassword' element={<ResetPasswordPage/>}/>
    </Routes>
    </Layout>
   </Router>
   </>
  )
}

export default App