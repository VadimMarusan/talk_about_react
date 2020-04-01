import React from 'react'
import Header from "./Header/Header"
import Main from "./Main/Main"
import SectionsSpotify from './SectionsSpotify/SectionsSpotify'
import Footer from "./Footer/Footer"
import "./media.css"



const App = () => {
  return (
  		 <div>
			   <Header />
			   <Main />
         <SectionsSpotify/>
			   <Footer />
		   </div>
  )
}



export default App;
