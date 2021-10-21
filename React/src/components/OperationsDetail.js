import React, { useState, useEffect} from 'react';

import AddOperations from './AddOperations'
import ButtonsContainerOperations from './ButtonsContainerOperations';
import Header from './header/Header';
import BalanceSection from './BalanceSection'
import Footer from './Footer'

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
                  lastOperations = op.slice(op).reverse();
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
        <>
          <Header />
          <BalanceSection />
          <section className="last-operations" id="last-operations">
          <AddOperations />
          <ButtonsContainerOperations />
          
          
          <div className="card-table">
            <table className="home-table"aria-describedby="myOperations" id="dataTable" cellSpacing="0">
              <thead>
                <tr>
                  <th id="detail">Detail</th>
                  <th id="amount">Amount</th>
                  <th id="date">Date</th>
                  <th id="type">Type</th>
                  <th id="category">category</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th id="detail">Detail</th>
                  <th id="amount">Amount</th>
                  <th id="date">Date</th>
                  <th id="type">Type</th>
                  <th id="category">category</th>
                </tr>
              </tfoot>
              <tbody id="insert-data">
                {operations.map((operation, i) => {
                  return (
                    <tr key={i}>
                      <td>{operation.detail}</td>
                      <td>{operation.type}</td>
                      <td>{operation.date}</td>
                      <td>{operation.type}</td>
                      <td>{operation.category}</td>
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
    } else {
      return (
        <>
          <Header />
          <BalanceSection />
          <section className="last-operations" id="last-operations">
          <h1 className="heading">Last Operations</h1>
          <AddOperations />
          <ButtonsContainerOperations />
          
          <div className="card-table">
            <table className="home-table"aria-describedby="myOperations" id="dataTable" cellSpacing="0">
              <thead>
                <tr>
                  <th id="detail">Detail</th>
                  <th id="amount">Amount</th>
                  <th id="date">Date</th>
                  <th id="type">Type</th>
                  <th id="category">category</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th id="detail">Detail</th>
                  <th id="amount">Amount</th>
                  <th id="date">Date</th>
                  <th id="type">Type</th>
                  <th id="category">category</th>
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
        <Footer />
      </>
      )
    }
}

export default LastOperations;