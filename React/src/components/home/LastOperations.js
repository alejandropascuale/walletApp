import React from 'react'


function LastOperations() {
    return (
        <section className="last-operations" id="last-operations">
        <h1 className="heading">Last Operations</h1>
        <a href="/operations"><h3 className="sub-heading heartbeat">Click here to manage your operations</h3></a>
        <div className="card-table">
          <table className="home-table"aria-describedby="myOperations" id="dataTable" cellspacing="0">
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

export default LastOperations;