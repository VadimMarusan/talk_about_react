import React, { Component } from "react"



class ArticleListItem extends Component  {

 
render() {
  const {
    id,
    name,
    description,
    category,
    image,
} = this.props;


  return (
  		 <div>
			  <div className="content-container">
                        <div className="content-image">
                        <img src={image}/>
                        </div>
                        <div className="content-despription">
                            <div className="content-tittle"><a href=""><h2><span>{name}</span></h2></a></div>
                            <div className="content-text"><span>{description}</span></div>
                            <div className="content-button"><input type="button" value="READ MORE"/></div>
                        </div>
                        </div>
		   </div>
  )
  }
}



export default ArticleListItem