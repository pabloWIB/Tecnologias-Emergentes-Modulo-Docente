import { useState } from 'react';

import { TeachersContext } from './TeachersContext';
import { INITIAL_TEACHERS } from 'pages/teachers/data';

export default function TeachersProvider({ children }) {
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);

  const addTeacher = (teacher) => {
    setTeachers((current) => [...current, { ...teacher, id: crypto.randomUUID() }]);
  };

  const updateTeacher = (id, changes) => {
    setTeachers((current) => current.map((teacher) => (teacher.id === id ? { ...teacher, ...changes, id } : teacher)));
  };

  const deleteTeacher = (id) => {
    setTeachers((current) => current.filter((teacher) => teacher.id !== id));
  };

  return <TeachersContext value={{ teachers, addTeacher, updateTeacher, deleteTeacher }}>{children}</TeachersContext>;
}
