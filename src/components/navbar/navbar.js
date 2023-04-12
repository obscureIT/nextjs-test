import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navigation () {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" className='d-flex align-items-center'>
            <img width="40" src="/assets/images/dental.svg"/>
            <h2 className='header-logo text-secondary'>ADHUNIK DENTAL</h2>
          </Navbar.Brand>
          {/* <Nav className="ms-auto">
           <AccountCircleIcon/>
          </Nav> */}
        </Container>
      </Navbar>
    
    </>
  );
}

export default Navigation;