import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Movie Nominator</header>
      {children}
      <footer className={styles.footer}>
        <p>Made by Randy Shao</p>
      </footer>
    </div>
  );
};

export default Layout;
