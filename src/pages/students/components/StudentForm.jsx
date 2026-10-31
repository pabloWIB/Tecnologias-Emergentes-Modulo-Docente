import { useState } from 'react';

import { Button, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Stack, TextField } from '@mui/material';

import FormSection from 'components/FormSection';
import { DOCUMENT_TYPES, SUBJECTS } from 'utils/options';

import { Link } from 'react-router';

const EMPTY_TEACHER = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  age: '',
  gender: 'female',
  typeDocument: 'passport',
  numberDocument: '',
  dateBirth: '',
  typeSubject: 'software_development'
};

const REQUIRED_FIELDS = {
  name: 'Write the name.',
  lastName: 'Write the last name.',
  numberDocument: 'Write the document number.'
};

export default function StudentForm({ initialValues = EMPTY_TEACHER, submitLabel = 'Create', onSubmit }) {
  const [values, setValues] = useState({ ...EMPTY_TEACHER, ...initialValues });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const found = {};
    Object.entries(REQUIRED_FIELDS).forEach(([field, message]) => {
      if (String(values[field]).trim() === '') found[field] = message;
    });
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    onSubmit({ ...values, age: values.age === '' ? '' : Number(values.age) });
  };

  const field = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name] ?? ' '
  });

  return (
    <Stack component="form" onSubmit={handleSubmit} noValidate spacing={3} sx={{ px: { xs: 0, md: 4, lg: 20 } }}>
      <FormSection title="Basic details">
        <TextField label="Name" required {...field('name')} />
        <TextField label="Last Name" required {...field('lastName')} />
        <TextField label="Email" type="email" {...field('email')} />
        <TextField label="Phone" type="tel" {...field('phone')} />
        <TextField label="Address" {...field('address')} />
        <TextField label="Age" type="number" {...field('age')} />
        <FormLabel id="student-gender-label">Gender</FormLabel>
        <RadioGroup aria-labelledby="student-gender-label" name="gender" value={values.gender} onChange={handleChange} row>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormSection>

      <FormSection title="Identity">
        <TextField select label="Type Document" {...field('typeDocument')}>
          {DOCUMENT_TYPES.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
        <TextField label="Number document" required {...field('numberDocument')} />
        <TextField label="Date of birth" type="date" slotProps={{ inputLabel: { shrink: true } }} {...field('dateBirth')} />
      </FormSection>

      <FormSection title="Subjects">
        <TextField select label="Subject" {...field('typeSubject')}>
          {SUBJECTS.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </FormSection>

      <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
        <Button size="small" variant="outlined" component={Link} to="/students">
          Cancel
        </Button>
        <Button size="small" variant="contained" type="submit">
          {submitLabel}
        </Button>
      </Stack>
    </Stack>
  );
}
