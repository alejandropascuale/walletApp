import React, { useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment';
import { UserContext } from '../App';


function LastOperations() {
    const [operations, setOperations] = useState([]);
    const {userLogin} = useContext(UserContext);
    useEffect(() => {
      let lastOperations = [];
      let operationsLocal = JSON.parse(localStorage.getItem('operationsUser'));
      if(userLogin && typeof userLogin != 'undefined'){
        fetch(`http://localhost:3001/api/operations/user/${userLogin.idUser}`)
        .then(response => response.json())
        .then(op => {
          if(op.length > 10){
            lastOperations = op.slice(op.length-10).reverse();
            } else {
              lastOperations = op.slice(op).reverse();
            }
            setOperations(lastOperations)
        })
      } else if (operationsLocal) {
        if (operationsLocal.length > 10) {
          lastOperations = operationsLocal.slice(operationsLocal.length-10).sort((a,b)=>a.idOperation-b.idOperation).reverse();
        } else {
          lastOperations = operationsLocal.sort((a,b)=>a.idOperation-b.idOperation).reverse();
        }
        setOperations(lastOperations);
      } else {
        setOperations(lastOperations);
      }
    }, [userLogin])
    if(operations.length !== 0){
      return (
        <section className="last-operations" id="last-operations">
        <h1 className="heading">Last Operations</h1>
        
        <Link to='/operations'><h3 className="sub-heading heartbeat">Click here to manage your operations</h3></Link>
        <div className="card-table">
          <table className="home-table"aria-describedby="myOperations" id="dataTable" cellSpacing="0">
            <thead>
              <tr>
                <th id="detail">Detail</th>
                <th id="amount">Amount</th>
                <th id="date">Date</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th id="detail">Detail</th>
                <th id="amount">Amount</th>
                <th id="date">Date</th>
              </tr>
            </tfoot>
            <tbody id="insert-data">
              {operations.map((operation, i) => {
                return (
                  <tr key={i}>
                    <td>{operation.detail}</td>
                    <td>{operation.type}</td>
                    <td>{moment(operation.date).format( 'DD-MMM-YYYY')}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
      )
    } else {
      return (
        <section className="last-operations" id="last-operations">
        <h1 className="heading">Last Operations</h1>
        
        <Link to='/operations'><h3 className="sub-heading heartbeat">Click here to manage your operations</h3></Link>
        <div className="card-table">
          <table className="home-table"aria-describedby="myOperations" id="dataTable" cellSpacing="0">
            <thead>
              <tr>
                <th id="detail">Detail</th>
                <th id="amount">Amount</th>
                <th id="date">Date</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th id="detail">Detail</th>
                <th id="amount">Amount</th>
                <th id="date">Date</th>
              </tr>
            </tfoot>
            <tbody id="insert-data">
              <tr>
                <td>
                  you have no registered operations
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      )
    }
}

export default LastOperations;