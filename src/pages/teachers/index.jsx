import { useState } from 'react';

import { Button, Stack } from '@mui/material';

import MainCard from 'components/MainCard';
import DataTable from 'components/DataTable';
import ConfirmDelete from 'components/ConfirmDelete';
import Toast from 'components/Toast';
import { useTeachers } from 'context/TeachersContext';
import { useFlashMessage } from 'hooks/useFlashMessage';
import TeacherActions from './components/TeacherActions';

import { Plus } from 'lucide-react';

import { Link } from 'react-router';

const COLUMNS = [
  { key: 'numberDocument', label: 'Document' },
  { key: 'name', label: 'Name', align: 'right' },
  { key: 'lastName', label: 'Last name', align: 'right' },
  { key: 'address', label: 'Address', align: 'right' },
  { key: 'age', label: 'Age', align: 'right' }
];

export default function Teachers() {
  const { teachers, deleteTeacher } = useTeachers();
  const [message, setMessage] = useFlashMessage();
  const [toDelete, setToDelete] = useState(null);

  const confirmDelete = () => {
    deleteTeacher(toDelete.id);
    setMessage(`${toDelete.name} ${toDelete.lastName} was deleted`);
    setToDelete(null);
  };

  return (
    <Stack spacing={3}>
      <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
        <Button variant="contained" component={Link} to="/teachers/create" startIcon={<Plus size={16} aria-hidden="true" />}>
          Add Teacher
        </Button>
      </Stack>

      <MainCard title="Teachers" content={false}>
        <DataTable
          ariaLabel="Teachers"
          columns={COLUMNS}
          rows={teachers}
          getRowId={(teacher) => teacher.id}
          emptyText="There are no teachers yet. Use «Add Teacher» to create the first one."
          renderActions={(teacher) => (
            <TeacherActions
              teacherId={teacher.id}
              teacherName={`${teacher.name} ${teacher.lastName}`}
              onDelete={() => setToDelete(teacher)}
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
