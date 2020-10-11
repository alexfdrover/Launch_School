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

  function generateExamStats(examVals) {
    let minimum = examVals.reduce((min, ele) => ele < min ? ele : min);
    let maximum = examVals.reduce((max, ele) => ele > max ? ele : max);
    let average = examVals.reduce((sum, ele) => sum += ele) / examVals.length;
    return { average,
             minimum,
             maximum,
    };
  }

  const EXAM_WEIGHT = 0.65;
  const NUM_OF_EXAMS = 4;
  let studentGrades = [];
  let exams = [];

  let students = Object.keys(scores);
  students.forEach(student => {
    let examGrade = scores[student].scores.exams.reduce((sum, ele) => sum += ele) / 4;
    let exercisesGrade = scores[student].scores.exercises.reduce((sum, ele) => sum += ele);
    let weightedGrade = (EXAM_WEIGHT * examGrade) + ((1 - EXAM_WEIGHT) * exercisesGrade);
    studentGrades.push(generateStudentGrade(weightedGrade));
  });
  
  for (let i = 0; i < NUM_OF_EXAMS; i += 1) {
    let currentExamValues = [];
    students.forEach(student => {
      currentExamValues.push(scores[student].scores.exams[i]);
    })

    exams.push(generateExamStats(currentExamValues));
  }

  return {
    studentGrades,
    exams,
  };
}
