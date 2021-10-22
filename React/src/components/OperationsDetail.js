import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faCheck, faTimes, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

import CategoryFilter from './CategoryFilter';
import Header from './header/Header';
import BalanceSection from './BalanceSection'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody} from 'reactstrap'

function LastOperations() {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('operationsUser')) {
      setOperations(JSON.parse(localStorage.getItem('operationsUser')))
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
    (caso === 'Editar') && setModalEditar(true)
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
        operation.ammount = Number(operationSelect.ammount);
        operation.date = operationSelect.date;
        operation.type = operationSelect.type;
        operation.category = operationSelect.category;
      }
    })
    setOperations(newOperations);
    setModalEditar(false);
    localStorage.setItem('operationsUser', JSON.stringify(newOperations))
    console.log(operations);
  }

  const openInsertModal = () => {
    setOperationSelect(null);
    setModalInsertar(true);
  }

  const insert = () => {
    var operationToInsert = operationSelect;
    operationToInsert.idOperation = operations[operations.length-1].idOperation +1;
    let newOperations = operations;
    newOperations.push(operationToInsert);
    setOperations(newOperations);
    setModalInsertar(false);
    localStorage.setItem('operationsUser', JSON.stringify(newOperations))
    console.log(operations);
  }
  console.log(operations);
      return (
        <>
          <Header />
          <BalanceSection />
          <section className="last-operations" id="last-operations">
            {/* <AddOperations /> */}
            <div className="flex-conteiner">
              <div className="flex-container1">
                <FontAwesomeIcon 
                className="heartbeat" icon={faPlusSquare} id="add-operations-button" 
                onClick={() => openInsertModal()}
                />
                <h3 className="add-text">Pres to Add operation</h3>
              </div>
              <CategoryFilter />
            </div>
          
            <Modal isOpen={ModalEditar}>
              <ModalBody>
                <div>
                  <h3 className="edit-title-form">Edit Operation</h3>
                </div>
                <form className="edit-operations-form" id="edit-operations-form" action="/operations/">
            
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
                  value={operationSelect && operationSelect.date}
                  onChange={handleChange}
                  />
          
                  <label htmlFor="type">Type</label>
                  <select name="type" id="type" disabled>
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
                    <button onClick={() => setModalEditar(false)} className="btn btn-danger"><FontAwesomeIcon icon={faTimes} /></button>
                    <button onClick={()=> edit()} className="btn btn-primary"><FontAwesomeIcon icon={faCheck} /></button>
                  </div>
                  
                </form> 
              </ModalBody>
            </Modal>
            
            <Modal isOpen={ModalInsertar}>
              <ModalBody>
                <div>
                  <h3 className="edit-title-form">Add Operation</h3>
                </div>
                <form className="edit-operations-form" id="edit-operations-form" action="/operations/">
            
                  <label htmlFor="id">id</label>
                  <input disabled type="number" name="id" id="id" 
                  value={operations.length ===0? 1: operations.length + 1}
                  />

                  <label htmlFor="detail">Detail</label>
                  <input type="text" name="detail" id="detail" 
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
                  <select name="type" id="type" onChange={handleChange}>
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
                    <button onClick={() => setModalInsertar(false)} className="btn btn-danger"><FontAwesomeIcon icon={faTimes} /></button>
                    <button onClick={()=> insert()} className="btn btn-primary"><FontAwesomeIcon icon={faCheck} /></button>
                  </div>
                  
                </form> 
              </ModalBody>
            </Modal>
          
            <div className="card-table">
              <table className="home-table"aria-describedby="myOperations" id="dataTable" cellSpacing="0">
                <thead>
                  <tr>
                    <th id="idOperation">Id</th>
                    <th id="detail">Detail</th>
                    <th id="amount">Amount</th>
                    <th id="date">Date</th>
                    <th id="type">Type</th>
                    <th id="category">category</th>
                    <th id="actions">Actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th id="idOperation">Id</th>
                    <th id="detail">Detail</th>
                    <th id="amount">Amount</th>
                    <th id="date">Date</th>
                    <th id="type">Type</th>
                    <th id="category">category</th>
                    <th id="actions">Actions</th>
                  </tr>
                </tfoot>
                <tbody id="insert-data">
                  {operations.map((operation, i) => {
                    return (
                      <tr key={i}>
                        <td value={operation.idOperation}>{operation.idOperation}</td>
                        <td>{operation.detail}</td>
                        <td>{operation.type}</td>
                        <td>{moment(operation.date).format( 'DD-MMM-YYYY')}</td>
                        <td>{operation.type}</td>
                        <td>{operation.category}</td>
                        <td>
                          <div className="options-container">
                            {/* ver porque no funciona el link para editar y crear el componente de edicion de operaciones */}
                              {/* <Link to={`/operations/${operation.idOperation}/edit`}><FontAwesomeIcon icon={faEdit} /></Link> */}
                              <button onClick={() => SelectOperation(operation, 'Editar')}><FontAwesomeIcon icon={faEdit} /></button>
                              <button ><FontAwesomeIcon icon={faTrash} /></button>
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

export default LastOperations;