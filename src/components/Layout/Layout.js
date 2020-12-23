import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Nominator App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>Movie Nominator</header>
      {children}
      <footer className={styles.footer}>Made by Randy Shao</footer>
    </div>
  );
};

export default Layout;
