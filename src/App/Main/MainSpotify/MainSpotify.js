import React from "react"
import Filter from "./Filter"
import MainSlider from "./MainSlider"
import Sidebar from "./Sidebar"
import ArticlesList from "./ArticlesList"
import Section1 from "./Section1"
import Section2 from "./Section2"
import "./../Main.css"


const MainSpotify = () => {
    return (
        <div>
            <div className="container">
                    <Filter/>
                   <MainSlider/>
                    <div className="main-container">
                    <div className="content">
                       <ArticlesList/>
                        <Section1/>
                        <Section2/>
                    </div>
                    <Sidebar/>
                    </div>
                </div>
        </div>
    )
}

export default MainSpotify