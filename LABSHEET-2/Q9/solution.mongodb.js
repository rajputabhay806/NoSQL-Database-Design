// LABSHEET-2 - Q9
// Solution / commands

use LocalNoSQL
db.createCollection("Students")
db.Students.insertMany([{Student_ID:1,Name:"Rishabh Yadav",Course:"BCA",Marks:85},{Student_ID:2,Name:"Mohd Juber",Course:"BCA",Marks:82}])
db.Students.find().pretty()
db.Students.updateOne({Student_ID:1},{$set:{Marks:88}})
db.Students.deleteOne({Student_ID:2})
db.Students.find().pretty()
