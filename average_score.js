//AVERAGE SCORE AND FILTER

//Exercise taken from the tutorial of Grafikart : https://grafikart.fr/tutoriels/fonctions-2060

/*
In this exercise, we want to modify the following object to add an 'average' property that will contain the average score of each student.

Once this object is modified, we will create a top 3 ranking of students.

For this exercise, you will need to use the 'sort' function.
*/

const students = [
  {
    name: 'John',
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: 'Marie',
    notes: [5, 8, 10, 19, 12],
  },
  {
    name: 'Alan',
    notes: [10, 18, 15, 20, 20],
  },
  {
    name: 'Milo',
    notes: [19, 10, 5, 17, 18],
  },
  {
    name: 'Elliot',
    notes: [8, 20, 12, 16, 29],
  },
];

//SOLUTION
const average = (notes) => {
  let sum = 0;
  for (let note of notes) {
    sum = sum + note;
  }
  return sum / notes.length;
};

const compareStudent = (a, b) => {
  return b.average - a.average;
};

for (let student of students) {
  student.average = average(student.notes);
}

students.sort(compareStudent);
console.log(students);

const podium = (students) => {
  for (let i = 0; i < 3; i++) {
    return students.student.name;
  }
};
console.log(podium);
