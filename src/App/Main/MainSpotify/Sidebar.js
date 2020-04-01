import React from 'react'


const Sidebar = () => {
  return (
  		 <div>
			   <div className="sidebar">
                        <div className="sidebar-subscribe-container">
                        <div className="sidebar-tittle">
                            <h1><span className="sidebar-subscribe">Subscribe</span></h1>
                        </div>
                        <div className="sidebar-form">
                            <form action="">
                            <h3>Download FREE Photography Lighting Cheat Sheet</h3>
                            <p>Subscribe and get a free downloadable photography lighting cheat sheet.</p>
                            <input type="email" placeholder="E-mail Adress"/>
                            <input type="submit" value="SUBSCRIBE"/>
                            </form>
                        </div>
                        </div>
                        <div className="sidebar-subscribe-container">
                        <div className="sidebar-tittle">
                            <h1><span className="sidebar-subscribe">Let’s be friends</span></h1>
                        </div>
                        <div className="social-media">
                            <a href=""><img src="images/facebook.png" alt=""/></a> 
                            <a href=""><img src="images/insta.png" alt=""/></a> 
                            <a href=""><img src="images/twitter.png" alt=""/></a> 
                        </div>
                        </div>
                    </div>
		   </div>
  )
}



export default Sidebar;