// LABSHEET-1 - Q21
// Question: Create the student database and Students collection again, then insert three students

use student

db.createCollection("Students");

db.Students.insertMany([
    {
        RollNo: 201,
        Name: "Rishabh Yadav",
        Department: "BCA",
        Semester: 5,
        CGPA: 8.5
    },
    {
        RollNo: 202,
        Name: "Mohd Juber",
        Department: "BCA",
        Semester: 5,
        CGPA: 8.2
    },
    {
        RollNo: 203,
        Name: "Harsh Sharma",
        Department: "BCA",
        Semester: 5,
        CGPA: 9.0
    }
]);

db.Students.find().pretty();
