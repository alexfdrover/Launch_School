let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  function determineGradeLetter(grade) {
    if (grade < 60) {
      return 'F';
    } else if (grade < 69) {
      return 'E';
    } else if (grade < 77) {
      return 'D';
    } else if (grade < 85) {
      return 'C';
    } else if (grade < 93) {
      return 'B';
    } else {
      return 'A';
    }
  }

  function generateStudentGrade(score) {
    let gradeNumber = Math.round(score);
    let gradeLetter = determineGradeLetter(gradeNumber);
    return `${gradeNumber} (${gradeLetter})`;
  }

  const EXAM_WEIGHT = 0.65;
  let studentGrades = [];
  let exams = [];

  let students = Object.keys(scores);
  students.forEach(student => {
    let examGrade = scores[student].scores.exams.reduce((sum, ele) => sum += ele) / 4;
    let exercisesGrade = scores[student].scores.exercises.reduce((sum, ele) => sum += ele);
    let weightedGrade = (EXAM_WEIGHT * examGrade) + ((1 - EXAM_WEIGHT) * exercisesGrade);
    studentGrades.push(generateStudentGrade(weightedGrade));
  });
  
  
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
