// LABSHEET-1 - Q24
// Question: Find students whose CGPA is greater than or equal to 8.5

db.Students.find(
    { CGPA: { $gte: 8.5 } },
    { _id: 0 }
);
