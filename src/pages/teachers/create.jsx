import { useTeachers } from 'context/TeachersContext';
import TeacherForm from './components/TeacherForm';

import { useNavigate } from 'react-router';

export default function CreateTeacher() {
  const { addTeacher } = useTeachers();
  const navigate = useNavigate();

  const handleSubmit = (teacher) => {
    addTeacher(teacher);
    navigate('/teachers', { state: { message: `${teacher.name} ${teacher.lastName} was created` } });
  };

  return <TeacherForm onSubmit={handleSubmit} />;
}
