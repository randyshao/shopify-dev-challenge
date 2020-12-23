import SearchRounded from '@material-ui/icons/SearchRounded';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <SearchRounded />
      <input className={styles.search} placeholder='Search movie title...' />
    </div>
  );
};

export default SearchBar;
