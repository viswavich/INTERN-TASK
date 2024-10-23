<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <label for="courseFilter">Course Filter:</label>
    <select id="courseFilter" onchange="filterStudents()">
      <option value="ALL">ALL</option>
    </select>

    <table>
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody id="studentTableBody">
        <!-- Students will be populated here -->
      </tbody>
    </table>
  </div>

  <script src="script.js"></script>
</body>
</html>
