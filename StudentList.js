import React, { useState, useMemo, useCallback } from 'react';
import './StudentList.css'; // Import the CSS file

const StudentList = ({ studentList }) => {
  const [filter, setFilter] = useState('ALL');

  const handleFilterChange = useCallback((event) => {
    setFilter(event.target.value);
  }, []);

  const filteredStudentList = useMemo(() => {
    if (filter === 'ALL') {
      return studentList;
    }
    return studentList.filter(student => student.course === filter);
  }, [filter, studentList]);

  const uniqueCourses = useMemo(() => {
    const courses = studentList.map(student => student.course);
    return ['ALL', ...new Set(courses)];
  }, [studentList]);

  return (
    <div className="container">
      <label htmlFor="courseFilter">Course Filter: </label>
      <select id="courseFilter" value={filter} onChange={handleFilterChange}>
        {uniqueCourses.map(course => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudentList.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName} {student.lastName}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;