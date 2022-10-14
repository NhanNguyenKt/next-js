import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarMenu from './NavbarMenu';

export default function Layout({ children }) {
  return (
    <Container>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <title>My next app</title>
      </Head>
      <header>
        <NavbarMenu></NavbarMenu>
      </header>
      <main>{children}</main>
    </Container>
  );
}
