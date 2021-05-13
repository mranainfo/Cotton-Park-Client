import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { userContext } from '../../App';

const Orders = () => {
  const [loggedInUser] = useContext(userContext)
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://apricot-crumble-74697.herokuapp.com/order?email=' + (loggedInUser.email))
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [loggedInUser.email])

  return (
    <Container>
      <div className="shadow rounded p-5 mt-5">
        <h4>Total Order: {orders.length} </h4>

        <Table hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>Price</th>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(pd =>
              <tr>
                <td>{pd.title}</td>
                <td>${pd.price}</td>
                <td>{pd.date}</td>
                <td>{pd.userName}</td>
                <td>{pd.email}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Orders;