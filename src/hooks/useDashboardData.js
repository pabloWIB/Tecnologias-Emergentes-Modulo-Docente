import { useStudents } from 'context/StudentsContext';
import { useTeachers } from 'context/TeachersContext';

export const useDashboardData = () => {
  const { students } = useStudents();
  const { teachers } = useTeachers();
  return { status: 'ready', students, teachers, retry: () => {} };
};
