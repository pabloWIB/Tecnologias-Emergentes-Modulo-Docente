import { useState } from 'react';

import { StudentsContext } from './StudentsContext';
import { INITIAL_STUDENTS } from 'pages/students/data';

export default function StudentsProvider({ children }) {
  const [students, setStudents] = useState(INITIAL_STUDENTS);

  const addStudent = (student) => {
    setStudents((current) => [...current, { ...student, id: crypto.randomUUID() }]);
  };

  const updateStudent = (id, changes) => {
    setStudents((current) => current.map((student) => (student.id === id ? { ...student, ...changes, id } : student)));
  };

  const deleteStudent = (id) => {
    setStudents((current) => current.filter((student) => student.id !== id));
  };

  return <StudentsContext value={{ students, addStudent, updateStudent, deleteStudent }}>{children}</StudentsContext>;
}
