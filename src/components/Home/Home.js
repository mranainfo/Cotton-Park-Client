import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://apricot-crumble-74697.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <Container className="d-flex">
                <Row>
                    {
                        product.length === 0 && <Spinner animation="border" />
                    }
                    {
                        product.map(pd => <Product product={pd} key={pd._id}></Product>)
                    }
                </Row>
            </Container>

        </>
    );
};

export default Home;