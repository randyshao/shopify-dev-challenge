import { useState, useEffect, useContext } from 'react';
import { NominationsContext } from '../../context/NominationsContext';
import styles from './SearchList.module.css';

const SearchResult = ({ movie }) => {
  const { nominations, addNomination } = useContext(NominationsContext);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (nominations.length === 0) {
      setDisabled(false);
    }
    for (let i = 0; i < nominations.length; i++) {
      if (movie.imdbID === nominations[i].imdbID) {
        setDisabled(true);
        break;
      } else {
        setDisabled(false);
      }
    }
  }, [nominations]);

  const nominationSubmit = (movie) => {
    if (nominations.length <= 4) {
      const newNomination = {
        imdbID: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
      };
      addNomination(newNomination);
      setDisabled(true);
    } else {
      console.log('not allowed!');
    }
  };
  return (
    <div className={styles.row}>
      <h3 className={styles.name}>{movie.Title}</h3>
      <h3 className={styles.year}>{movie.Year}</h3>
      <button disabled={disabled} onClick={() => nominationSubmit(movie)}>
        Nominate
      </button>
    </div>
  );
};

export default SearchResult;
