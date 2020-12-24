import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  nominations: [
    { Title: 'Movie 1', Year: '2012', imdbID: '123456' },
    { Title: 'Movie 1', Year: '2012', imdbID: '1234d' },
    { Title: 'Movie 1', Year: '2012', imdbID: '1234d6' },
    { Title: 'Movie 1', Year: '2012', imdbID: '1234ss6' },
  ],
};

// Create context
export const NominationsContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <NominationsContext.Provider
      value={{
        nominations: state.nominations,
      }}
    >
      {children}
    </NominationsContext.Provider>
  );
};
