import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment';


function LastOperations() {
    const [operations, setOperations] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(data => {
          function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
          }
          let emailCookie = getCookie('userEmail');
          let lastOperations = [];
          let operationsLocal = JSON.parse(window.localStorage.getItem('operationsUser'))
          if(emailCookie){
            const user = data.find(u => u.email === emailCookie);
            fetch(`http://localhost:3001/api/operations/user/${user.idUser}`)
                .then(response => response.json())
                .then(op => {
                  if(op.length > 10){
                    lastOperations = op.slice(op.length-10).reverse();
                    } else {
                      op.slice(op.length).reverse()
                      lastOperations = op.slice(op.length).reverse();
                    }
                    setOperations(lastOperations)
                })
          } else if (operationsLocal) {
            lastOperations = operationsLocal.slice(operationsLocal).reverse();
            setOperations(lastOperations);
          } else {
            setOperations(lastOperations);
          }
          
        })
    }, [])
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