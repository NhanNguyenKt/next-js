import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export default function NavbarMenu() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Link href='/' passHref>
        <Navbar.Brand style={{ marginLeft: '20px' }}>My Next app</Navbar.Brand>
      </Link>
      <Nav>
        <Link href='/posts' passHref>
          <Nav.Link style={{ marginLeft: '20px' }}>Static Site</Nav.Link>
        </Link>
        <Link href='/jokes' passHref>
          <Nav.Link style={{ marginLeft: '20px' }}>SSR</Nav.Link>
        </Link>
        <Link href='/about' passHref>
          <Nav.Link style={{ marginLeft: '20px' }}>CSR</Nav.Link>
        </Link>
        <Link href='/apiData' passHref>
          <Nav.Link style={{ marginLeft: '20px' }}>DataAPI</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
}
