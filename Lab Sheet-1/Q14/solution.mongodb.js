// LABSHEET-1 - Q14
// Question: Delete the student with Roll No. 105

db.Student.deleteOne({ RollNo: 105 });

db.Student.findOne({ RollNo: 105 });
