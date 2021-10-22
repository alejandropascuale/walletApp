import React, {useState, useEffect} from 'react'
import Footer from './Footer'
import Header from './header/Header'

function OperationsEdit() {
    const [operation, setOperation] = useState([]);
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
                  setOperation(lastOperations)
                })
          } else if (operationsLocal) {
            let operationSelect = operationsLocal.filter(op => op.idOperation === 1);
            setOperation(operationSelect);
          } else {
            setOperation(lastOperations);
          }
          
        })
    }, [])
    return (
        <>
            <Header />
            <main>
                <section>

                </section>
            </main>  
            <Footer />  
        </>
    )
}

export default OperationsEdit