// startsWith method case insensitive

function filterStudents(studentList, startChar) {
  let stChar = startChar.toUpperCase();
  let upperList = studentList.map((item) => item.toUpperCase());
  let filteredList = upperList.filter((student) => student.startsWith(stChar));
  return filteredList;
}
