// LABSHEET-1 - Q23
// Question: Find students whose CGPA is less than 9

db.Students.find(
    { CGPA: { $lt: 9 } },
    { _id: 0 }
);
