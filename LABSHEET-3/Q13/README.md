# LABSHEET-3 - Q13

## Question

Design a Course Learning Platform containing courses, instructors, students, modules, progress, and completion status. Retrieve students according to their course progress.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.LearningCourses.insertMany([
{Course_ID:1,Title:"MongoDB",Instructor:"Dr. Sharma",Modules:["Basics","CRUD","Aggregation"],Students:[{Student_ID:1,Progress:90,Completed:true},{Student_ID:2,Progress:60,Completed:false}]},
{Course_ID:2,Title:"NoSQL Design",Instructor:"Dr. Verma",Modules:["Models","Scaling"],Students:[{Student_ID:1,Progress:80,Completed:false}]}
])
db.LearningCourses.find({"Students.Progress":{$gte:80}})
db.LearningCourses.find({"Students.Completed":true})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
