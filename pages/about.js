import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import { getJokes } from '../lib/post';
const About = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    if (jokes.length < 5) {
      const timerID = setInterval(async () => {
        let tempJokes = await getJokes();
        setJokes([...jokes, tempJokes.value]);
      }, 1500);
      return () => {
        console.log('3333');
        clearInterval(timerID);
      };
    }
  }, [jokes]);
  useEffect(() => {
    console.log(jokes);
    console.log('render');
  });
  return (
    <Layout>
      <h1>Cilent side rendering</h1>
      {jokes.length > 0
        ? jokes.map((el, index) => (
            <div key={index}>
              <div>{el}</div>
              <div>-------------------</div>
            </div>
          ))
        : null}
    </Layout>
  );
};

export default About;
