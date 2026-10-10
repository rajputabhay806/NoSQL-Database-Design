# LABSHEET-3 - Q1

## Question

Design a Student Activity Tracking System in MongoDB that stores student details, enrolled courses, attendance, skills, and recent activities. Perform queries to retrieve students based on different activity conditions.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.StudentActivity.insertMany([
{Student_ID:1,Name:"Rishabh Yadav",Courses:["BCA","DBMS"],Attendance:88,Skills:["MongoDB","Java"],RecentActivities:[{Type:"Login",Date:"2026-10-01"},{Type:"Assignment",Date:"2026-10-02"}]},
{Student_ID:2,Name:"Mohd Juber",Courses:["BCA"],Attendance:76,Skills:["Python","MongoDB"],RecentActivities:[{Type:"Quiz",Date:"2026-10-03"}]}
])
db.StudentActivity.find({Attendance:{$gte:80}})
db.StudentActivity.find({"RecentActivities.Type":"Assignment"})
db.StudentActivity.find({Skills:"MongoDB"})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
