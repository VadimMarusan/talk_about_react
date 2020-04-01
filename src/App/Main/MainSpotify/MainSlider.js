import React from 'react'



const MainSlider = () => {
  return (
  		 <div>
			   <div className="slider-container">
                    <div className="slider-side">
                        <h2>Breaking News</h2>
                        <ul className="slider-list">
                        <li><a href="">Types of Photography: A Complete List Of Photography Genres</a></li>
                        <li><a href="">Interview with wedding photographer Hannah Quintana</a></li>
                        <li><a href="">Top 10 Flickr Alternatives to Share Your Photos</a></li>
                        <li><a href="">25 Best Landscape Photographers Of All Time</a></li>
                        <li><a href="">10 Food Photography Tips and Advice Only The Best Know</a></li>
                        </ul>
                        <input type="button" value="MORE NEWS"/>
                    </div>
                    <div className="slider">
                        <div>
                        <img src="https://picsum.photos/id/685/1170/520" alt=""/>
                        <span><a href="">Interview with commercial photographer Dan Callister</a></span>
                        </div>
                        <div>
                        <img src="https://picsum.photos/id/781/1170/520" alt=""/>
                        <span><a href="">30 Free Photography Cheat Sheets And Infographics</a></span>
                        </div>
                        <div><img src="https://picsum.photos/id/606/1170/520" alt=""/>
                        <span><a href="">Interview with landscape photographer Viktoria Haack</a></span>
                        </div>
                    </div>
                    </div>
		   </div>
  )
}



export default MainSlider;