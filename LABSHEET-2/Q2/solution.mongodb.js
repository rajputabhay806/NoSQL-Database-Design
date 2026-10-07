// LABSHEET-2 - Q2
// Solution / commands

use CollegeDB
db.Students.insertMany([
{Student_ID:1,Name:"Rishabh Yadav",Course:"BCA",Semester:5,Marks:85},
{Student_ID:2,Name:"Mohd Juber",Course:"BCA",Semester:5,Marks:82},
{Student_ID:3,Name:"Harsh Sharma",Course:"BCA",Semester:5,Marks:90},
{Student_ID:4,Name:"Aman Singh",Course:"BTech",Semester:5,Marks:78},
{Student_ID:5,Name:"Sorav Verma",Course:"BCA",Semester:4,Marks:87}]);
db.Students.find().pretty();
db.Students.find({Course:"BCA"}).pretty();
db.Students.updateOne({Student_ID:1},{$set:{Marks:88}});
db.Students.deleteOne({Student_ID:5});
db.Students.countDocuments();
