import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaCookieBite } from 'react-icons/fa';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';

function NavBar(){

    const[expanded, setExpanded]=useState(false)

    return(
    <Navbar bg="light" expand="lg" expanded={expanded}>
        <Container>
            <Link className='text-brand' to="/"><Navbar.Brand href=""><FaCookieBite /> Dolcha</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>setExpanded(expanded?false:'expanded')} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" >
                    <Link className='text-link' to="/" href="" onClick={()=>setExpanded(false)}>Home</Link>
                    <Link className='text-link' to="/categoria/torta" href="#link"onClick={()=>setExpanded(false)}>Tortas</Link>
                    <Link className='text-link' to="/categoria/galleta" href=""onClick={()=>setExpanded(false)}>Galletas</Link>
                    <Link className='text-link' to="/categoria/muffin" href=""onClick={()=>setExpanded(false)}>Muffins</Link>
                    <Link className='text-link' to="/categoria/macarron" href=""onClick={()=>setExpanded(false)}>Macarrones</Link>
                </Nav>
                <Link className='text-link' to="/cart" onClick={()=>setExpanded(false)}><CartWidget /> </Link>    
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;