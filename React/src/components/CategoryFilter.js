import React from 'react'


function CategpryFilter() {
  
    return (
        
          <div className="flex-container2">
            <label htmlFor="category-filter">Category Filter</label>
            <form action=""  name="category-filter-form" id="category-filter-form">
              <select name="category-filter" id="category-filter">
                <option value="All">-</option>
                <option value="Awards">Awards</option>
                <option value="Credit card">Credit card</option>
                <option value="Essential Services">Essential Services</option>
                <option value="Food">Food</option>
                <option value="House Rent">House Rent</option>
                <option value="Insurance">Insurance</option>
                <option value="Investments">Investments</option>
                <option value="Loans">Loans</option>
                <option value="Others">Others</option>
                <option value="Taxes">Taxes</option>
                <option value="Salary">Salary</option>
              </select>
              <input type="hidden" name="name" value="someName" id="nameInput" />
            </form>
          </div>
        
    )
}

export default CategpryFilter