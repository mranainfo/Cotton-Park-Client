import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [productInfo, setProductInfo] = useState({});
    const { id } = useParams();

    const { title, price } = productInfo;

    useEffect(() => {
        fetch(`https://apricot-crumble-74697.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProductInfo(data[0]))
    }, [id]);

    // handle checkout
    const handleCheckout = (data) => {
        alert('order submit successfully!');
        const orderDetails = data
        const date = new Date()
        const userName = loggedInUser.displayName
        const userEmail = loggedInUser.email
        orderDetails.userName = userName
        orderDetails.email = userEmail
        orderDetails.date = date
        fetch('https://apricot-crumble-74697.herokuapp.com/checkoutOrder', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
    }

    return (
        <>
            <Container className="p-5">
                <h1 className="mb-4">Checkout</h1>
                <div className="shadow-sm rounded">
                    <Table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{title}</td>
                                <td>1</td>
                                <td>${price}</td>
                            </tr>

                            <tr>
                                <td colSpan="2">Total</td>
                                <td>${price}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button onClick={() => handleCheckout(productInfo)} className="float-right" variant="dark">Checkout</Button>
                </div>
            </Container>
        </>
    );
};

export default Checkout;