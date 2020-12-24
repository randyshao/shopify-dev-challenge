import { useState } from 'react';
import SearchRounded from '@material-ui/icons/SearchRounded';
import styles from './SearchBar.module.css';

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState('');

  const inputChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className={styles.container}>
      <SearchRounded />
      <input
        className={styles.search}
        placeholder='Search movie title...'
        value={text}
        onChange={(e) => inputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
