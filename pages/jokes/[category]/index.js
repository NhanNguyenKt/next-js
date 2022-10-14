import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../../components/Layout';
import { getJokesByType } from '../../../lib/post';

const ChatDetail = ({ jokes }) => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Layout>
      <h3>Sever side rendering</h3>
      <h3>Jokes about : {category}</h3>
      <button
        style={{ marginRight: '10px' }}
        onClick={() => {
          router.push(`/jokes/${category}`);
        }}
      >
        new Joke
      </button>
      <button onClick={() => router.push(`/jokes`)}>Go Back</button>
      <h4>{jokes.value}</h4>
    </Layout>
  );
};
export default ChatDetail;

export async function getServerSideProps({ params }) {
  //Render ở sever mỗi khi client send req
  console.log('bbbbb');
  const jokes = await getJokesByType(params.category);
  return {
    props: { jokes },
  };
}
