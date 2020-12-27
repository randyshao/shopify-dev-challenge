import SearchResult from './SearchResult';
import styles from './SearchList.module.css';

const SearchList = ({ movies }) => {
  return (
    <div className={styles.searchList}>
      <h1>Search Results</h1>
      <div className={styles.header}>
        <h2 className={styles.title}>Title</h2>
        <h2 className={styles.title}>Year</h2>
        <div className={styles.space}></div>
      </div>
      {movies.map((movie) => (
        <SearchResult movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default SearchList;
