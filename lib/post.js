import axios from 'axios';

//get 5 post cho static page
export const getPosts = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get 5 post ID de tao static path
export const getPostIds = async () => {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
};

//get post theo id de dua vao dynamic route cho static page
export const getPostById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get Joke theo theo loại
export const getJokesByType = async (category) => {
  try {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get Random joke
export const getJokes = async () => {
  try {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get dữ liệu từ folder API
export const getAPI = async () => {
  try {
    const data = await axios.get(`http://localhost:3000/api/post/abd`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
