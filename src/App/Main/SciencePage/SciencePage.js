import React from "react"
import Filter from "./../MainSpotify/Filter"
import SciencePageSlider from "./SciencePageSlider"
import SciencePageMain from "./SciencePageMain"

const SciencePage = () => {
    return (
        <div>
           <div class="container">
        <Filter/>
       <SciencePageSlider/>
        <SciencePageMain/>
      </div> 
        </div>
    )
}

export default SciencePage

