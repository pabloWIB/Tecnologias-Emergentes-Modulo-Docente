import { useStudents } from 'context/StudentsContext';
import StudentForm from './components/StudentForm';

import { useNavigate } from 'react-router';

export default function CreateStudent() {
  const { addStudent } = useStudents();
  const navigate = useNavigate();

  const handleSubmit = (student) => {
    addStudent(student);
    navigate('/students', { state: { message: `${student.name} ${student.lastName} was created` } });
  };

  return <StudentForm onSubmit={handleSubmit} />;
}
