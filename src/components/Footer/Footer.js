import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer(){
    return(
        <div className="font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="6">
                        <h5>Dolcha Backery</h5>
                        <p>Descubre los secretos de la mejor pasteleria de Buenos Aires.</p>
                        <p>Tortas | Galletas | Muffins | Macarrones</p>   
                    </Col>
                    <Col md="6">
                        <h5>Seguinos en nuestras redes:</h5>
                        <ul>
                            <p>
                                <FaFacebook className="list-unstyled" size={28} />
                                <FaInstagram className="list-unstyled" size={28} />
                                <FaTwitterSquare className="list-unstyled" size={28} />
                                <FaWhatsapp className="list-unstyled" size={28}/>
                            </p>
                            <p>Copyright Dolcha Backery</p>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>  
    )
}

export default Footer;
