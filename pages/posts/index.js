import Layout from '../../components/Layout';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAPI, getPosts } from '../../lib/post';
const Posts = ({ posts, dataAPI }) => {
  return (
    <Layout>
      <h2>Page Tĩnh, render 1 lần khi build, cấu hình dynamic route</h2>
      {posts.length > 0
        ? posts.map((post) => (
            <Card key={post.id}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Link href={`/posts/${post.id}`} passHref>
                  <Card.Link>See more</Card.Link>
                </Link>
              </Card.Body>
            </Card>
          ))
        : ''}
    </Layout>
  );
};

//get static data from backend /db /api
//dữ liệu tĩnh được xây dựng thành file html khi run build, thay đổi khi build lại => giúp seo và ssr trước khi gửi đến client
export const getStaticProps = async () => {
  const posts = await getPosts();
  const dataFromAPI = await getAPI();
  return { props: { posts: posts, dataAPI: dataFromAPI } };
};

export default Posts;
