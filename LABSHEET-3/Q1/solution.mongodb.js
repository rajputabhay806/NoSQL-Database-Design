// LABSHEET-3 - Q1
// Solution

use CollegeDB
db.StudentActivity.insertMany([
{Student_ID:1,Name:"Rishabh Yadav",Courses:["BCA","DBMS"],Attendance:88,Skills:["MongoDB","Java"],RecentActivities:[{Type:"Login",Date:"2026-10-01"},{Type:"Assignment",Date:"2026-10-02"}]},
{Student_ID:2,Name:"Mohd Juber",Courses:["BCA"],Attendance:76,Skills:["Python","MongoDB"],RecentActivities:[{Type:"Quiz",Date:"2026-10-03"}]}
])
db.StudentActivity.find({Attendance:{$gte:80}})
db.StudentActivity.find({"RecentActivities.Type":"Assignment"})
db.StudentActivity.find({Skills:"MongoDB"})
P