function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      return `${this.name} is a ${this.year} year student`;
    },
    listCourses() {
      return this.courses;
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },
    viewNotes() {
      this.courses.forEach(course => {
        console.log(`${course.name}: ${course.note}`);
      });
    },
    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = note;
        }
      });
    },
  };
}

let school = (function() {
  let students = [];
  
  function validYear(year) {
      return ['1st', '2nd', '3rd', '4th', '5th'].includes(year);
  }

  function getCourse(student, subject) {
    return student.listCourses().filter(course => {
      return (course.name === subject && course.grade);
    });
  }

  return {
    addStudent(name, year) {
      if (!validYear(year)) {
        console.log('Invalid Year');
        return;
      }

      students.push(createStudent(name, year));
    },
    enrollStudent(studentName, courseName, courseCode) {
      let student = this.findStudent(studentName);
      student.addCourse({name: courseName, code: courseCode});
    },
    addGrade(studentName, code, grade) {
      let student = this.findStudent(studentName);
      let course = student.courses.filter(course => course.code === code)[0];
      course.grade = grade;
    },
    findStudent(name) {
      return students.filter(entry => entry.name === name)[0];
    },
    getReportCard(studentName) {
      let student = (typeof studentName === 'object') ? studentName : this.findStudent(studentName);
      student.courses.forEach(course => {
        let courseName = course.name;
        let courseGrade = course.grade || 'In Progress';
        console.log(courseName + ': ' + courseGrade);
      });
    },
    courseReport(subject) {
      let msgLog = [];

      let header = `=${subject} Grades=`;
      msgLog.push(header);

      let grades = [];
      students.forEach(student => {
        let course = getCourse(student, subject);
        if (course.length === 0) {
          return;
        } else {
          course = course[0];
        }

        grades.push(course.grade);
        msgLog.push(`${student.name}: ${course.grade}`);
      });

      if (grades.length === 0) return undefined;

      msgLog.push('---');

      let average = grades.reduce((sum, grade) => sum += grade) / grades.length;    
      msgLog.push(`Course average: ${average}`);

      msgLog.forEach(msg => console.log(msg));
    },
  }
})();

school.addStudent('qux', '2nd');
school.enrollStudent('qux', 'Math', 101);
school.enrollStudent('qux', 'Advanced Math', 102);
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);

school.addStudent('bar', '1st');
school.enrollStudent('bar', 'Math', 101);
school.addGrade('bar', 101, 91);

school.addStudent('foo', '3rd');
school.enrollStudent('foo', 'Math', 101);
school.enrollStudent('foo', 'Advanced Math', 102);
school.enrollStudent('foo', 'Physics', 202);
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

school.courseReport('Advanced Math');
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

school.courseReport('Physics');
// undefined