import React from "react"
import "./SectionReel.css"


const SectionReel = () => {
	return (
        <section className="section-reel">
        <div className="container">
          <div className="section-reel-container">
            <div className="section-reel-tittle">
              <div className="reel-tittle-name">
                <h2><a href="">TALK ABOUT REEL</a></h2>
                <span>The new home for amazing video content</span>
              </div>
              <div className="reel-button">
                <input type="button" value="Visit Reel"/>
              </div>
            </div>
            <div className="section-reel-content">
              <div className="reel-item">
                <a href=""><img src="https://picsum.photos/id/319/500/320" alt=""/></a>
                <div className="img-description">
                  <a href="">How To Improve Your Fog Photography (10 Easy Tips)</a>
                </div>
              </div>
              <div className="reel-item">
                <a href=""><img src="https://picsum.photos/id/322/500/320" alt=""/></a>
                <div className="img-description">
                  <a href="">To Make Money With Photography (17 Things You Can Do Now)</a>
                </div>
              </div>
              <div className="reel-item">
                <a href=""><img src="https://picsum.photos/id/320/500/320" alt=""/></a> 
                <div className="img-description">
                  <a href="">How To Use Flash Photography To Better Expose Your Subjects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	)
}

export default SectionReel