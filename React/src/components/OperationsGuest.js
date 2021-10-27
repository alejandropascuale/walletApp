import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck, faTimes, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import Header from './header/Header';
import BalanceSection from './BalanceSection'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody} from 'reactstrap'

function OperationsGuest() {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    let lastOperations = [];
    let operationsLocal = JSON.parse(localStorage.getItem('operationsUser'));
    if (operationsLocal) {
      lastOperations = operationsLocal.sort((a,b)=>a.idOperation-b.idOperation).reverse();
      setOperations(lastOperations);
    }
    }, [])

  const [ModalEditar, setModalEditar] = useState (false);
  const [ModalEliminar, setModalEliminar] = useState (false);
  const [ModalInsertar, setModalInsertar] = useState (false);

  const [operationSelect, setOperationSelect] = useState ({
    idOperation:'',
    detail: '',
    ammount: '',
    date: '',
    type: '',
    category: ''
    });
  const SelectOperation = (elemento, caso)=> {
    setOperationSelect(elemento);
    (caso === 'Edit')? setModalEditar(true): setModalEliminar(true);
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setOperationSelect((prevState)=>({
      ...prevState,
      [name]: value
    }))
  }

  const edit = () => {
    let newOperations = operations;
    newOperations.map(operation => {
      if(operation.idOperation === operationSelect.idOperation){
        operation.detail = operationSelect.detail;
        operation.ammount = operationSelect.ammount;
        operation.date = operationSelect.date;
        operation.type = operationSelect.type;
        operation.category = operationSelect.category;
      }
    })
    setOperations(newOperations);
    setModalEditar(false);
    localStorage.setItem('operationsUser', JSON.stringify(newOperations))
  }

  const deleteOp = () => {
    let newOperations = operations.filter(op => op.idOperation !== operationSelect.idOperation);
    setOperations(newOperations);
    localStorage.setItem('operationsUser', JSON.stringify(newOperations))
    setModalEliminar(false);
  }

  const openInsertModal = () => {
    setOperationSelect(null);
    setModalInsertar(true);
  }

  const insert = () => {
    var operationToInsert = operationSelect;
    if(operations.length > 0) {
      operationToInsert.idOperation = operations.length +1;
    } else {
      operationToInsert.idOperation = 1;
    }
    if (!operationToInsert.type){
      operationToInsert.type = 'Income';
    }
    if (!operationToInsert.category){
      operationToInsert.category = 'Awards';
    }
    operationToInsert.ammount = parseFloat(operationToInsert.ammount)
    let newOperations = operations;
    newOperations.push(operationToInsert);
    newOperations.sort((a,b)=>a.idOperation-b.idOperation).reverse();
    setOperations(newOperations);
    setModalInsertar(false);
    localStorage.setItem('operationsUser', JSON.stringify(newOperations))
  }

  const filter = () => {
    let index = document.getElementById("category-filter").options.selectedIndex;
    localStorage.setItem("categoryValue", index);
    let operationsLocal = JSON.parse(localStorage.getItem('operationsUser'));
    if(index !== '0') {
      let option = document.querySelectorAll('#category-filter option')[index];
      let filterOperations = operationsLocal.filter( o => o.category === option.value);
      let lastOperations = filterOperations.slice(filterOperations).reverse();
      setOperations(lastOperations);
    } 
    if ( index === 0) {
      setOperations(operationsLocal);
    }
  }

  return (
    <>
      <Header />
      <BalanceSection />
      <section className="last-operations" id="last-operations">
        <div className="flex-conteiner">
          <div className="flex-container1">
            <FontAwesomeIcon 
            className="heartbeat" icon={faPlusSquare} id="add-operations-button" 
            onClick={() => openInsertModal()}
            />
            <h3 className="add-text display-mobile">Pres to Add operation</h3>
          </div>
          <div className="flex-container2">
            <label htmlFor="category-filter">Category Filter</label>
            <form action="/operations"  name="category-filter-form" id="category-filter-form">
              <select name="category-filter" id="category-filter" onChange={() => filter()}>
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
        </div>
      
        <Modal isOpen={ModalEditar}>
          <ModalBody>
            <div>
              <h3 className="edit-title-form">Edit Operation</h3>
            </div>
            <form className="edit-operations-form" id="edit-operations-form">
        
              <label htmlFor="id">id</label>
              <input disabled type="number" name="id" id="id" value={operationSelect && operationSelect.idOperation}/>

              <label htmlFor="detail">Detail</label>
              <input type="text" name="detail" id="detail" 
              value={operationSelect && operationSelect.detail}
              onChange={handleChange}
              />
      
              <label htmlFor="ammount">Ammount</label>
              <input type="number" name="ammount" id="ammount" step="any" 
              value={operationSelect && operationSelect.ammount}
              onChange={handleChange}
              />
      
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" 
              value={operationSelect && moment(operationSelect.date).format( 'YYYY-MM-DD')}
              onChange={handleChange}
              />
      
              <label htmlFor="type">Type</label>
              <select name="type" id="type" disabled
              value={operationSelect && operationSelect.type}>
                <option >Income</option>
                <option >Expense</option>
              </select>
              
              <label htmlFor="category">Category</label>
              <select name="category" id="category" onChange={handleChange}
              value={operationSelect && operationSelect.category}>
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

              <div>
                <button type='button' onClick={() => setModalEditar(false)} className="btn btn-danger"><FontAwesomeIcon icon={faTimes} /></button>
                <button type='button' onClick={()=> edit()} className="btn btn-primary"><FontAwesomeIcon icon={faCheck} /></button>
              </div>
              
            </form> 
          </ModalBody>
        </Modal>
                  
        <Modal isOpen={ModalEliminar}>
          <ModalBody>
            <h2 className='edit-title-form'>
              Are you sure to delete the operation #{operationSelect && operationSelect.idOperation}?
            </h2>
            <form className='confirm-delete-form'>
              <button className='btn btn-secondary'type='button' 
              onClick={() => setModalEliminar(false)}
              >Cancel
              </button>

              <button className='btn btn-danger'type='button' 
              onClick={() => deleteOp()}
              >Yes
              </button>
            </form>
          </ModalBody>
        </Modal>

        <Modal isOpen={ModalInsertar}>
          <ModalBody>
            <div>
              <h3 className="edit-title-form">Add Operation</h3>
            </div>
            <form className="edit-operations-form" id="edit-operations-form" action='/operations'>
        
              <label htmlFor="id">id</label>
              <input disabled type="number" name="id" id="id" 
              value={operations.length ===0? 1: operations.length + 1}
              />

              <label htmlFor="detail">Detail</label>
              <input type="text" name="detail" id="detail" 
              autoFocus
              value={operationSelect? operationSelect.detail: ''}
              onChange={handleChange}
              />
      
              <label htmlFor="ammount">Ammount</label>
              <input type="number" name="ammount" id="ammount" step="any" 
              value={operationSelect? operationSelect.ammount: ''}
              onChange={handleChange}
              />
      
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" 
              value={operationSelect? operationSelect.date: ''}
              onChange={handleChange}
              />
      
              <label htmlFor="type">Type</label>
              <select name="type" id="type" onChange={handleChange}
              value={operationSelect? operationSelect.type: ''}>
                <option >Income</option>
                <option >Expense</option>
              </select>
              
              <label htmlFor="category">Category</label>
              <select name="category" id="category" onChange={handleChange}>
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

              <div>
                <button type='button' onClick={() => setModalInsertar(false)} className="btn btn-danger"><FontAwesomeIcon icon={faTimes} /></button>
                <button type='submit' onClick={()=> insert()} className="btn btn-primary"><FontAwesomeIcon icon={faCheck} /></button>
              </div>
              
            </form> 
          </ModalBody>
        </Modal>

        <div className="card-table">
          <table className="home-table"aria-describedby="myOperations" id="dataTable" cellSpacing="0">
            <thead>
              <tr>
                <th className='display-mobile' id="idOperation">Id</th>
                <th id="detail">Detail</th>
                <th id="amount">Amount</th>
                <th id="date">Date</th>
                <th className='display-mobile' id="type">Type</th>
                <th className='display-mobile' id="category">category</th>
                <th id="actions">Actions</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className='display-mobile' id="idOperation">Id</th>
                <th id="detail">Detail</th>
                <th id="amount">Amount</th>
                <th id="date">Date</th>
                <th className='display-mobile' id="type">Type</th>
                <th className='display-mobile' id="category">category</th>
                <th id="actions">Actions</th>
              </tr>
            </tfoot>
            <tbody id="insert-data">
              {operations.map((operation, i) => {
                return (
                  <tr key={i}>
                    <td className='display-mobile' value={operation.idOperation}>{operation.idOperation}</td>
                    <td>{operation.detail}</td>
                    <td className={operation.type === 'Expense'? 'expense': ''}>{operation.type === 'Expense'? '-'+operation.ammount: operation.ammount}</td>
                    <td>{moment(operation.date).format('DD-MMM-YYYY')}</td>
                    <td className='display-mobile'>{operation.type}</td>
                    <td className='display-mobile'>{operation.category}</td>
                    <td>
                      <div className="options-container">
                        {/* ver porque no funciona el link para editar y crear el componente de edicion de operaciones */}
                          {/* <Link to={`/operations/${operation.idOperation}/edit`}><FontAwesomeIcon icon={faEdit} /></Link> */}
                          <button onClick={() => SelectOperation(operation, 'Edit')}><FontAwesomeIcon icon={faEdit} /></button>
                          <button onClick={() => SelectOperation(operation, 'Delete')}><FontAwesomeIcon icon={faTrash} /></button>
                          {/* <form action={`http://localhost:3001/operations/${operation.idOperation}/delete?_method=DELETE`} method="post">
                            <button type="submit"><FontAwesomeIcon icon={faTrash} /></button>
                          </form> */}
                        </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    <Footer />
  </>
  )
}

export default OperationsGuest;