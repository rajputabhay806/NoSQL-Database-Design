// LABSHEET-2 - Q11
// Solution / commands

rs.initiate({_id:"studentRS",members:[{_id:0,host:"localhost:27017"},{_id:1,host:"localhost:27018"}]});
use CollegeDB
db.Students.insertOne({Student_ID:1,Name:"Rishabh Yadav",Course:"BCA",Marks:85});
rs.status();
