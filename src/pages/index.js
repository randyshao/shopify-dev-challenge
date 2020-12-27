import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import { NominationsContext } from '../context/NominationsContext';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchList from '../components/SearchList/SearchList';
import NominationList from '../components/NominationList/NominationList';

export default function Home() {
  const { nominations } = useContext(NominationsContext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const APIKey = 'f71dc30f';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?s=${query}&apikey=${APIKey}`
        );
        const movies = res.data.Search;
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

  let banner;

  if (nominations.length === 5) {
    banner = (
      <div className={styles.maxBanner}>
        You have reached the max number of nominations!
      </div>
    );
  }

  <Head>
    <title>Movie Nominator App</title>
    <link rel='icon' href='/favicon.ico' />
  </Head>;

  return (
    <Layout>
      <div>
        <SearchBar getQuery={(q) => setQuery(q)} />
        {banner}
        <div className={styles.lists}>
          <SearchList movies={results} />
          <NominationList />
        </div>
      </div>
    </Layout>
  );
}
