import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Link from 'react-router-dom/Link';
import Selfie from "../img/SelfieLightHouse.png";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
            <Container>
                <Navbar.Brand className="headertext" href="/">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Selfie} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '10px' }} />
                        <h1 style={{ margin: '0' }}>Stephen Cook</h1>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Link</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;