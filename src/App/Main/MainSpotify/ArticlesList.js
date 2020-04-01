import React from 'react'
import ArticleListItem from './ArticleListItem'
import ArticlesData from "../ArticlesData"


const ArticlesList = () => {
  return (
  		 <div>
                <div className="category-tittle">
                    <h1><span>Category - Spotligts</span></h1>
                </div>
                <div className="category-description">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio voluptate! Hic illum animi, quis repellendus molestiae odit ipsum delectus ab, vitae est veniam harum quia provident dolore vero aut?
                    </span>
                </div>
               {
                  ArticlesData.map(({
                      id,
                      name,
                      description,
                      category,
                      image,
                  })=> (
               
                <div>
                <ArticleListItem
                    image={image}
                    name={name}
                    description={description}
                    category={category}
                    id={id}
                />
                </div>
           
           
                )
                )
                }  
            </div>      
        )
}



export default ArticlesList;