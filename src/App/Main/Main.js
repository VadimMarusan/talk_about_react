import React from "react"
import { Route } from "react-router-dom"
import MainSpotify from "./MainSpotify/MainSpotify"
import SciencePage from "./SciencePage/SciencePage"



const Main = () => {
	return (
        <main className="main">
            <Route exact path="/" component={MainSpotify} />
            <Route path="/science_page" component ={SciencePage}/>
				
            
		</main>
			
	)
}

export default Main