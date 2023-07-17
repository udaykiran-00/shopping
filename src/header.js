import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation() {
  return (
    <div id='postdetails' className='head'>
    <div id='name'><h1>e-Shop</h1></div>
    <div id='date'>
    <Navbar bg="light" expand="lg" id='nav'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <LinkContainer to="/articles">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/posts">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard">
              <Nav.Link>Add</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/posts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/subscription">
              <Nav.Link>Subscription</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/order">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/user">
              <Nav.Link>User</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  );
}
