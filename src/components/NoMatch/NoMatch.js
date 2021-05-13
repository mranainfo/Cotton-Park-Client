import React from 'react';
import { Container } from 'react-bootstrap';

const NoMatch = () => {
    return (
        <>
            <Container className="text-center p-5 text-danger">
                <div className="mt-5">
                    <h1>404</h1>
                    <h1>Page Not Found!</h1>
                </div>
            </Container>
        </>
    );
};

export default NoMatch;