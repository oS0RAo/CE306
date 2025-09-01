const students = [
    { name: "MLnwZa", grade: "A" },
    { name: "BangPooh", grade: "B" },
    { name: "Ismael", grade: "C" },
    { name: "Ahab", grade: "B" }
];

students.forEach((student, index) => {
  console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.grade}`);
});

function showStudentCount() {
  console.log(`Total students: ${students.length}`);
}

showStudentCount();