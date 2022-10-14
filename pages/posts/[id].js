import Layout from '../../components/Layout';
import { getPostById, getPostIds } from '../../lib/post';

const Post = ({ post }) => {
  return (
    <Layout>
      <div>Page tĩnh với route tương ứng</div>
      <div>id: {post.id}</div>
      <div>{post.title}</div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds();
  ///mang cac duong dan co dinh
  return {
    paths,
    fallback: false, //path nao khong thuoc boi getstaticpaths se bi loi
  };
};
export const getStaticProps = async ({ params }) => {
  //params la bien duong dan chua post id dang nam tren url
  const post = await getPostById(params.id);
  //tra ve doi tuong truyen vao cho component Post, bat buoc phai co key props
  return {
    props: { post },
  };
};

export default Post;
