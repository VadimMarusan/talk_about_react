import React from "react"
import "./Footer.css"


const Footer = () => {
	return (
			<footer className="footer">
               <div className="container">
                    <div className="container-h3-footer">
                    <div className="h3-footer">
                        <a href=""><img src="images/facebookbw.png" alt=""/></a> 
                        <a href=""><img src="images/instabw.png" alt=""/></a> 
                        <a href=""><img src="images/twitterbw.png" alt=""/></a> 
                    </div>
                    <div className="h3-description">
                        Copyright © 2020 
                    </div>
                    </div>
                </div>
            </footer>
	)
}

export default Footer