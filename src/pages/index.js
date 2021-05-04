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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?s=${query}&apikey=` +
            process.env.NEXT_PUBLIC_APIKEY
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

  return (
    <Layout>
      <Head>
        <title>The Shoppies - Movie Nominator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
