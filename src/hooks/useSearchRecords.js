import { useMemo } from 'react';

import { useStudents } from 'context/StudentsContext';
import { useTeachers } from 'context/TeachersContext';

export const useSearchRecords = () => {
  const { students } = useStudents();
  const { teachers } = useTeachers();

  return useMemo(
    () => [
      ...students.map((student) => ({
        group: 'Students',
        label: `${student.name} ${student.lastName}`,
        detail: `Document ${student.numberDocument}`,
        url: `/students/edit/${student.id}`
      })),
      ...teachers.map((teacher) => ({
        group: 'Teachers',
        label: `${teacher.name} ${teacher.lastName}`,
        detail: `Document ${teacher.numberDocument}`,
        url: `/teachers/edit/${teacher.id}`
      }))
    ],
    [students, teachers]
  );
};
