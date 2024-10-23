const studentList = [
  { id: 120, firstName: "Naresh", lastName: 'Kumar', course: 'MECHANICAL' },
  { id: 121, firstName: "Muthu", lastName: 'Ganesh', course: 'CIVIL' },
  { id: 122, firstName: "Ritesh", lastName: 'Arya', course: 'MECHANICAL' },
];

window.onload = function() {
  populateCourseFilter();
  displayStudents('ALL');
};

function populateCourseFilter() {
  const courseFilter = document.getElementById('courseFilter');
  const uniqueCourses = [...new Set(studentList.map(student => student.course))];
  
  uniqueCourses.forEach(course => {
    const option = document.createElement('option');
    option.value = course;
    option.textContent = course;
    courseFilter.appendChild(option);
  });
}

function displayStudents(filter) {
  const tableBody = document.getElementById('studentTableBody');
  tableBody.innerHTML = ''; // Clear the table

  studentList
    .filter(student => filter === 'ALL' || student.course === filter)
    .forEach(student => {
      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = student.id;

      const nameCell = document.createElement('td');
      nameCell.textContent = `${student.firstName} ${student.lastName}`;

      const courseCell = document.createElement('td');
      courseCell.textContent = student.course;

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(courseCell);

      tableBody.appendChild(row);
    });
}

function filterStudents() {
  const courseFilter = document.getElementById('courseFilter').value;
  displayStudents(courseFilter);
}
