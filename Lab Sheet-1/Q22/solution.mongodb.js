// LABSHEET-1 - Q22
// Question: Find students whose CGPA is greater than 8.5

db.Students.find(
    { CGPA: { $gt: 8.5 } },
    { _id: 0 }
);
