import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaCookieBite } from 'react-icons/fa';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import './NavBar.css';


function NavBar(){
    return(
    <Navbar bg="light" expand="lg">
        <Container>
            <Link className='text-brand'  to="/"><Navbar.Brand href=""><FaCookieBite /> Dolcha</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='text-link' to="/" href="">Home</Link>
                    <Link className='text-link' to="/categoria/torta" href="#link">Tortas</Link>
                    <Link className='text-link' to="/categoria/galleta" href="">Galletas</Link>
                    <Link className='text-link' to="/categoria/muffin" href="">Muffins</Link>
                    <Link className='text-link' to="/categoria/macarron" href="">Macarrones</Link>
                </Nav>
                <Link className='text-link' to="/cart"><CartWidget /> </Link>    
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;