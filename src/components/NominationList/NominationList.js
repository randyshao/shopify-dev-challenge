import { useContext } from 'react';
import styles from './NominationList.module.css';
import { NominationsContext } from '../../context/NominationsContext';

const NominationList = () => {
  const { nominations, removeNomination } = useContext(NominationsContext);

  if (nominations.length === 5) {
    console.log('You made the max number of nominations!');
  }

  let banner;

  if (nominations.length === 5) {
    banner = <div>YOU HAVE REACHED THE MAX AMOUNT</div>;
  }

  return (
    <div className={styles.nominationList}>
      <h1>Nomination List</h1>
      <div className={styles.header}>
        <h2 className={styles.title}>Title</h2>
        <h2 className={styles.title}>Year</h2>
        <div className={styles.space}></div>
      </div>
      {nominations.map((nomination) => (
        <div className={styles.row} key={nomination.imdbID}>
          <h3 className={styles.name}>{nomination.title}</h3>
          <h3 className={styles.year}>{nomination.year}</h3>
          <button onClick={() => removeNomination(nomination.imdbID)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default NominationList;
