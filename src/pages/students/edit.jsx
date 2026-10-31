import { useStudents } from 'context/StudentsContext';
import NotFound from 'pages/NotFound';
import StudentForm from './components/StudentForm';

import { useNavigate, useParams } from 'react-router';

export default function EditStudent() {
  const { studentId } = useParams();
  const { students, updateStudent } = useStudents();
  const navigate = useNavigate();

  const student = students.find((item) => item.id === studentId);

  if (!student) {
    return (
      <NotFound
        title="Student not found"
        text="There is no student with that identifier."
        backTo="/students"
        backLabel="Back to students"
      />
    );
  }

  const handleSubmit = (changes) => {
    updateStudent(student.id, changes);
    navigate('/students', { state: { message: `${changes.name} ${changes.lastName} was updated` } });
  };

  return <StudentForm initialValues={student} submitLabel="Edit" onSubmit={handleSubmit} />;
}
