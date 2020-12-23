import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';

export default function Home({ movies }) {
  console.log(movies);

  return (
    <Layout>
      <div>
        <SearchBar />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const APIKey = 'f71dc30f';

  const res = await axios.get(
    `http://www.omdbapi.com/?s=star+wars&apikey=${APIKey}`
  );
  const movies = await res.data;

  return {
    props: {
      movies,
    },
  };
};
