const createData = (id, numberDocument, name, lastName, address, age, extra) => ({
  id,
  numberDocument: String(numberDocument),
  name,
  lastName,
  address,
  age,
  email: '',
  phone: '',
  gender: 'female',
  typeDocument: 'identification_card',
  dateBirth: '',
  typeSubject: 'software_development',
  ...extra
});

export const INITIAL_STUDENTS = [
  createData('s1', 7890123456, 'Valentina', 'Sánchez Álvarez', 'Calle 23 # 45-67, Barrio El Poblado, Medellín', 31),
  createData('s2', 8901234567, 'David', 'Ramírez Pérez', 'Carrera 14 # 9-87, Barrio La Paz, Bogotá', 26, { gender: 'male' }),
  createData('s3', 9012345678, 'Sofía', 'Ortiz García', 'Avenida Circunvalar # 12-34, Conjunto Residencial Los Rosales, Cali', 39),
  createData('s4', 3123456709, 'Luis', 'González Castro', 'Carrera 8 # 23-45, Barrio La Floresta, Barranquilla', 23, { gender: 'male' }),
  createData('s5', 2345678901, 'Catalina', 'Rueda Gómez', 'Calle 60 # 12-34, Conjunto Residencial El Bosque, Cartagena', 42),
  createData('s6', 3456789012, 'Diego', 'Mendoza Hernández', 'Carrera 50 # 30-45, Barrio Alameda, Bucaramanga', 28, { gender: 'male' })
];
