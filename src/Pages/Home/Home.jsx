import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from '../../Components/Header/Header'
import Head from '../../Components/Head/Head'
import Boxes from '../../Components/Boxes/Boxes'
import About from '../../Components/About/About'
import Footer from '../../Components/Footer/Footer'
import Doing from '../../Components/Doing/Doing'
import Contact from '../../Components/Contact/Contact'
import LoginForm from '../../Components/LoginForm/LoginForm'

const Home = () => {

  const [showform, setShowForm] = useState(false)

    useEffect(() =>{
      Aos.init();
    }, [])

  return (
    <>
     {showform ? <LoginForm setShowForm={setShowForm} /> : <></>}
      <Header setShowForm = {setShowForm} />
      <Head />
      <Boxes />
      <About />
      <Doing />
      <Contact />
      <Footer />
    </>
  )
}

export default Home