import { useState } from 'react';

import { Button, Stack } from '@mui/material';

import MainCard from 'components/MainCard';
import DataTable from 'components/DataTable';
import ConfirmDelete from 'components/ConfirmDelete';
import Toast from 'components/Toast';
import { useStudents } from 'context/StudentsContext';
import { useFlashMessage } from 'hooks/useFlashMessage';
import StudentActions from './components/StudentActions';

import { Plus } from 'lucide-react';

import { Link } from 'react-router';

const COLUMNS = [
  { key: 'numberDocument', label: 'Document' },
  { key: 'name', label: 'Name', align: 'right' },
  { key: 'lastName', label: 'Last name', align: 'right' },
  { key: 'address', label: 'Address', align: 'right' },
  { key: 'age', label: 'Age', align: 'right' }
];

export default function Students() {
  const { students, deleteStudent } = useStudents();
  const [message, setMessage] = useFlashMessage();
  const [toDelete, setToDelete] = useState(null);

  const confirmDelete = () => {
    deleteStudent(toDelete.id);
    setMessage(`${toDelete.name} ${toDelete.lastName} was deleted`);
    setToDelete(null);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
        <Button variant="contained" component={Link} to="/students/create" startIcon={<Plus size={16} aria-hidden="true" />}>
          Add Student
        </Button>
      </Stack>

      <MainCard title="Students" content={false}>
        <DataTable
          ariaLabel="Students"
          columns={COLUMNS}
          rows={students}
          getRowId={(student) => student.id}
          emptyText="There are no students yet. Use «Add Student» to create the first one."
          renderActions={(student) => (
            <StudentActions
              studentId={student.id}
              studentName={`${student.name} ${student.lastName}`}
              onDelete={() => setToDelete(student)}
            />
          )}
        />
      </MainCard>

      <ConfirmDelete
        open={toDelete !== null}
        itemName={toDelete ? `${toDelete.name} ${toDelete.lastName}` : ''}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
      <Toast message={message} onClose={() => setMessage('')} />
    </Stack>
  );
}
