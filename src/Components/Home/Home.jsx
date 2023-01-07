import React from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../Header/Header'
import AboutUs from '../About/AboutUs'
import Intro from '../Intro/Intro'
import Menu from '../Menu/Menu'
import Chefs from '../Chefs/Chefs'
import Awards from '../Awards/Awards'

import './Home.css'
import Instagram from '../Intagram/Instagram'
import Contact from '../Contact/Contact'
import Sign from '../../Sign/Sign'
import Footer from '../Footer/Footer'
const Home = () => {

return (
    <>

<NavBar />
<Header/>
<AboutUs/>
<Menu/>
<Chefs/>
<Intro />
<Awards/>
<Instagram/>
<Contact/>
<Sign/>
<Footer/>

    </>
)
}

export default Home