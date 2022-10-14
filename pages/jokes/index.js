import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import Layout from '../../components/Layout';
const index = () => {
  const array = ['animal', 'career', 'dev', 'sport', 'movie'];
  return (
    <Layout>
      <h1>Sever side rendering page</h1>

      {array.map((el, index) => (
        <Link key={index} href={`/jokes/${el}`} passHref>
          <Nav.Link style={{ color: 'blue', textDecoration: 'underline' }}>
            Joke about: {el}
          </Nav.Link>
        </Link>
      ))}
    </Layout>
  );
};
export default index;
