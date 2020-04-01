import React from "react"

const Filter = () => {
	return (
        <div className="filter">
        <input type="search" placeholder="Search"/>
        <select name="" id="">
            <option className="option" defaultValue="">Select category</option>
            <option value="">SPOTLIGHTS</option>
            <option value="">SCIENCE</option>
            <option value=""> POLITICS</option>
            <option value="">DESIGN</option>
            <option value="">TRAVEL</option>
            <option value="">TECHNOLOGY</option>
        </select>
        <select name="" id="">
            <option className="option" defaultValue="">Select year</option>
            <option value="">2013</option>
            <option value="">2014</option>
            <option value="">2015</option>
            <option value="">2016</option>
            <option value="">2017</option>
            <option value="">2018</option>
            <option value="">2019</option>
            <option value="">2020</option>
        </select>
        <select >
            <option className="option" defaultValue="">Select month</option>
            <option value="">January</option>
            <option value="">February</option>
            <option value="">March</option>
            <option value="">April</option>
            <option value="">May</option>
            <option value="">June</option>
            <option value="">July</option>
            <option value="">August</option>
            <option value="">September</option>
            <option value="">October</option>
            <option value="">November</option>
            <option value="">December</option>
        </select>
        <input type="button" value="FILTER"/>
        </div>
	)
}

export default Filter