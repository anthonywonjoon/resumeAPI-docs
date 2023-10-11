import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Nav className="me-auto">
                    <Nav.Link>Resume-API</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;