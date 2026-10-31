import { useTeachers } from 'context/TeachersContext';
import NotFound from 'pages/NotFound';
import TeacherForm from './components/TeacherForm';

import { useNavigate, useParams } from 'react-router';

export default function EditTeacher() {
  const { teacherId } = useParams();
  const { teachers, updateTeacher } = useTeachers();
  const navigate = useNavigate();

  const teacher = teachers.find((item) => item.id === teacherId);

  if (!teacher) {
    return (
      <NotFound
        title="Teacher not found"
        text="There is no teacher with that identifier."
        backTo="/teachers"
        backLabel="Back to teachers"
      />
    );
  }

  const handleSubmit = (changes) => {
    updateTeacher(teacher.id, changes);
    navigate('/teachers', { state: { message: `${changes.name} ${changes.lastName} was updated` } });
  };

  return <TeacherForm initialValues={teacher} submitLabel="Edit" onSubmit={handleSubmit} />;
}
