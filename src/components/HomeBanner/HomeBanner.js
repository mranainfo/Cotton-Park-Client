import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <>
            <Container fluid={true} className="text-center p-5 banner-bg text-white">
                <h1>Cotton Park T-Shirt</h1>
                <p>Bangladesh Largest Cotton T-Shirt Collection</p>

            </Container>
        </>
    );
};

export default HomeBanner;