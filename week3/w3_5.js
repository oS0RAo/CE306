const students = [
  { name: "Alice", score: 95 },
  { name: "JoJO", score: 62 },
  { name: "BangPooh", score: 76 },
  { name: "Gordon", score: 68 },
  { name: "Eve", score: 54 },
  { name: "Nico", score: 78 },
  { name: "Grace", score: 80 }
];

function filterPassedStudents(minScore) {
  students.forEach(student => {
    if (student.score >= minScore) {
      console.log(`${student.name} passed with score ${student.score}`);
    }
  });
}

const passingScore = 75;
filterPassedStudents(passingScore);