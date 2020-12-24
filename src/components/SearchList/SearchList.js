import styles from './SearchList.module.css';

const SearchList = ({ movies }) => {
  return (
    <div>
      <div className={styles.header}>
        <h2 className={styles.title}>Title</h2>
        <h2 className={styles.title}>Year</h2>
      </div>
      {movies.map((movie) => (
        <div className={styles.row} key={movie.imdbID}>
          <h3 className={styles.name}>{movie.Title}</h3>
          <h3 className={styles.year}>{movie.Year}</h3>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
