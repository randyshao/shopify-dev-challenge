import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchList from '../components/SearchList/SearchList';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const APIKey = 'f71dc30f';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?s=${query}&apikey=${APIKey}`
        );
        const movies = res.data.Search;
        console.log(movies);
        if (movies === undefined) {
          setResults([]);
        } else {
          setResults(movies);
        }
      } catch (err) {
        return { err };
      }
    };
    fetchMovies();
  }, [query]);

  <Head>
    <title>Movie Nominator App</title>
    <link rel='icon' href='/favicon.ico' />
  </Head>;
  return (
    <Layout>
      <div>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <SearchList movies={results} />
      </div>
    </Layout>
  );
}

// export const getServerSideProps = async () => {
//   const APIKey = 'f71dc30f';

//   const res = await axios.get(
//     `http://www.omdbapi.com/?s=star+wars&apikey=${APIKey}`
//   );
//   const movies = await res.data;

//   return {
//     props: {
//       movies,
//     },
//   };
// };
