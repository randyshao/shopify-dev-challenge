import { useContext } from 'react';
import styles from './NominationList.module.css';
import { NominationsContext } from '../../context/NominationsContext';

const NominationList = () => {
  const { nominations } = useContext(NominationsContext);
  console.log(nominations);

  return (
    <div className={styles.container}>
      <h1>Nomination List</h1>
      <div className={styles.header}>
        <h2 className={styles.title}>Title</h2>
        <h2 className={styles.title}>Year</h2>
      </div>
      {nominations.map((nomination) => (
        <div className={styles.row} key={nomination.imdbID}>
          <h3 className={styles.name}>{nomination.Title}</h3>
          <h3 className={styles.year}>{nomination.Year}</h3>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default NominationList;
