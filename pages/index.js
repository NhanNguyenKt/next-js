import Layout from '../components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>test seo head</title>
        <meta
          name='test Seo'
          content='initial-scale=1.0, width=device-width'
        ></meta>
      </Head>
      <div>
        <h1>My next app</h1>
      </div>
    </Layout>
  );
}
