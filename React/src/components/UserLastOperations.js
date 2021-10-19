import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'



function LastOperations() {
    const [operations, setOperations] = useState([]);
    useEffect(()=>{
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
          const user = data.find(u => u.email === emailCookie);
        })
        fetch(`http://localhost:3001/api/operations/user/${user.idUser}`)
            .then(response => response.json())
            .then(data => {
              let lastOperations = [];
              if(data.length > 10){
                lastOperations = data.slice(data.length-10).reverse();
                } else {
                  data.slice(data.length).reverse()
                  lastOperations = data.slice(data.length).reverse();
                }
                setOperations(lastOperations)
            })
    }, [])
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
              {/* <tr>
                <td>
                  you have no registered operations
                </td>
              </tr> */}
              {operations.map((operation, i) => {
                return (
                  <tr key={i}>
                    <td>{operation.detail}</td>
                    <td>{operation.type}</td>
                    <td>{operation.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    )
}

export default LastOperations;