import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useContext, useState } from 'react'
import { EmailContext } from './context/EmailContext'

function App() {

const [email, setEmail] = useState("");

const updateEmail = (newEmail) => {
  setEmail(newEmail)
};

  const emailData = {
    email,
    updateEmail
  }

  return (
    <>
      <EmailContext.Provider value={emailData}> 
        <Header/>
        <Main/>
      </EmailContext.Provider>      
      <Footer/>
    </>
  )
}

export default App
