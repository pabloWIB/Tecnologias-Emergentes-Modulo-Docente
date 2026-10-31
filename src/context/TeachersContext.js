import { createContext, useContext } from 'react';

export const TeachersContext = createContext(null);

export const useTeachers = () => {
  const context = useContext(TeachersContext);
  if (!context) {
    throw new Error('useTeachers se tiene que usar dentro de <TeachersProvider>');
  }
  return context;
};
