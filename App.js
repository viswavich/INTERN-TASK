import React from 'react';
import StudentList from './StudentList';

const studentList = [
  {
    id: 120,
    firstName: "Naresh",
    lastName: 'Kumar',
    course: 'MECHANICAL',
  },
  {
    id: 121,
    firstName: "Muthu",
    lastName: 'Ganesh',
    course: 'CIVIL',
  },
  {
    id: 122,
    firstName: "Ritesh",
    lastName: 'Arya',
    course: 'MECHANICAL',
  },
];

const App = () => (
  <div>
    <h1><center>Student Management</center></h1>
    <StudentList studentList={studentList} />
  </div>
);

export default App;