# LABSHEET-2 - Q14

## Question

Implement a simple MapReduce operation on a student dataset containing Student_ID, Name, Course, Marks to calculate number of students and average marks for each course.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
use CollegeDB
var mapFunction=function(){emit(this.Course,{count:1,totalMarks:this.Marks});};
var reduceFunction=function(course,values){var r={count:0,totalMarks:0};values.forEach(function(v){r.count+=v.count;r.totalMarks+=v.totalMarks;});return r;};
db.Students.mapReduce(mapFunction,reduceFunction,{out:"CourseStatistics"});
db.CourseStatistics.find().pretty();
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
