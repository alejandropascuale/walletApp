import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import useLocalStorage from '../hooks/useLocalStorage';



function AddOperations() {
  const [operation, setOperation] = useLocalStorage ()
  

  let addOperationsForm = document.querySelector('#add-operations-form');
  
  let closeForm = () => {
    addOperationsForm.style.left = '-110%';
  }
  
    return (
      
        <form className="add-operations-form" id="add-operations-form" action="/operations/add" method="POST">
          <FontAwesomeIcon icon={faTimes} onClick={closeForm} className="cancel-button" id="cancel-button" />
  
          <label htmlFor="detail">Detail</label>
          <input type="text" name="detail" id="detail" />
  
          <label htmlFor="ammount">Ammount</label>
          <input type="number" name="ammount" id="ammount" step=".01" />
  
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
  
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option >Income</option>
            <option >Expense</option>
          </select>
          
          <label htmlFor="category">Category</label>
          <select name="category" id="category" >
            <option >Awards</option>
            <option >Credit card</option>
            <option >Essential Services</option>
            <option >Food</option>
            <option >House Rent</option>
            <option >Insurance</option>
            <option >Investments</option>
            <option >Loans</option>
            <option >Others</option>
            <option >Taxes</option>
            <option >Salary</option>
          </select>
          {/* if (locals.userLogged && typeof user != 'undefined') {
          <input type="number" name="id_user" id="id_user" className="display-none" defaultValue="<%= locals.userLogged.idUser %>">
          } */}
          <button onClick={e=>setOperation(e => operation)} type="reset" className="btn-check" id="add-operation-button">Add</button>
        </form>
      
    )
}

export default AddOperations