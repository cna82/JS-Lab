

function filterStudents(studentList,startChar) {
    const filteredList = studentList.filter(function(student){
        return student.startsWith(startChar)
    })

    return filteredList;
}