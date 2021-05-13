import React, { useContext } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <>

                <Container>
                    <Navbar expand="lg">
                        <Link to="/"><Navbar.Brand href="#home">Cotton Park</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto p-1">
                                <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                                <Link to="/orders"><Nav.Link href="#link">Orders</Nav.Link></Link>
                                <Link to="/manageProduct"><Nav.Link href="#link">Admin</Nav.Link></Link>
                                <Link to="/notFound"><Nav.Link href="#link">Deals</Nav.Link></Link>
                                <Nav.Link href="#link"> {loggedInUser.name || loggedInUser.displayName}</Nav.Link>
                            </Nav>
                            {
                                !loggedInUser.name || loggedInUser.displayName ? (<Link to="/login"><Button variant="dark">Login</Button></Link>)
                                : (<Button onClick={() => setLoggedInUser({})} variant="dark">SignOut</Button>)
                            }
                        </Navbar.Collapse>
                    </Navbar>
                </Container>

        </>
    );
};

export default Header;