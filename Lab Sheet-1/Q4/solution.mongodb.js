
## Q4 — `solution.mongodb.js`

```javascript
// LABSHEET-1 - Q4
// Question: Insert multiple student documents into the Student collection

db.Student.insertMany([
    {
        RollNo: 102,
        Name: "Mohd Juber",
        Department: "BCA",
        Semester: 5,
        CGPA: 8.2
    },
    {
        RollNo: 103,
        Name: "Harsh Sharma",
        Department: "BCA",
        Semester: 5,
        CGPA: 9.1
    },
    {
        RollNo: 104,
        Name: "Aman Singh",
        Department: "BTech",
        Semester: 5,
        CGPA: 7.8
    },
    {
        RollNo: 105,
        Name: "Sorav Verma",
        Department: "BCA",
        Semester: 4,
        CGPA: 8.7
    }
]);