// LABSHEET-1 - Q15
// Question: Delete all students having CGPA less than 8

db.Student.deleteMany({ CGPA: { $lt: 8 } });

db.Student.find({ CGPA: { $lt: 8 } });
