// LABSHEET-1 - Q11
// Question: Replace the complete document of Roll No. 103

db.Student.replaceOne(
    { RollNo: 103 },
    {
        RollNo: 103,
        Name: "Harsh Sharma",
        Department: "BCA",
        Semester: 6,
        CGPA: 9.3
    }
);

db.Student.findOne({ RollNo: 103 });
