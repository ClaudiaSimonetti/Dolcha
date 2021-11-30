import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaCookieBite } from 'react-icons/fa';
import CartWidget from './CartWidget';

function NavBar(){
    return(
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home"><FaCookieBite /> Dolcha</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Tortas</Nav.Link>
                    <Nav.Link href="#link">Galletas</Nav.Link>
                    <Nav.Link href="#link">Muffins</Nav.Link>
                    <Nav.Link href="#link">Budines</Nav.Link>
                </Nav>
                <CartWidget />    
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;