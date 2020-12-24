import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  nominations: [],
};

// Create context
export const NominationsContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function removeNomination(id) {
    dispatch({
      type: 'REMOVE_NOMINATION',
      payload: id,
    });
  }

  function addNomination(nomination) {
    dispatch({
      type: 'ADD_NOMINATION',
      payload: nomination,
    });
  }

  return (
    <NominationsContext.Provider
      value={{
        nominations: state.nominations,
        removeNomination,
        addNomination,
      }}
    >
      {children}
    </NominationsContext.Provider>
  );
};
