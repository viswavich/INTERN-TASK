import React from 'react';
import StudentList from './StudentList';

const studentList = [
  {
    id: 120,
    fistName: "Naresh",
    lastName: 'Kumar',
    course: 'MECHANICAL',
  },
  {
    id: 121,
    fistName: "Muthu",
    lastName: 'Ganesh',
    course: 'CIVIL',
  },
  {
    id: 122,
    fistName: "Ritesh",
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