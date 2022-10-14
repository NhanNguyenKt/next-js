import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getAPI } from '../lib/post';

export default function Home() {
  const [data, setData] = useState('');
  useEffect(() => {
    getAPI().then((res) => setData(res));
  }, []);
  return (
    <Layout>
      <div>
        <h1>Get data from Api route</h1>
        <div>{data}</div>
      </div>
    </Layout>
  );
}
