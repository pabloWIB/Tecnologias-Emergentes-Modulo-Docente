import { createContext, useContext } from 'react';

export const StudentsContext = createContext(null);

export const useStudents = () => {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error('useStudents se tiene que usar dentro de <StudentsProvider>');
  }
  return context;
};
