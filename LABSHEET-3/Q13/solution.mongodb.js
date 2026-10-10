// LABSHEET-3 - Q13
// Solution

use CollegeDB
db.LearningCourses.insertMany([
{Course_ID:1,Title:"MongoDB",Instructor:"Dr. Sharma",Modules:["Basics","CRUD","Aggregation"],Students:[{Student_ID:1,Progress:90,Completed:true},{Student_ID:2,Progress:60,Completed:false}]},
{Course_ID:2,Title:"NoSQL Design",Instructor:"Dr. Verma",Modules:["Models","Scaling"],Students:[{Student_ID:1,Progress:80,Completed:false}]}
])
db.LearningCourses.find({"Students.Progress":{$gte:80}})
db.LearningCourses.find({"Students.Completed":true})
