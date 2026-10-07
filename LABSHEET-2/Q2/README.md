# LABSHEET-2 - Q2

## Question

Create a MongoDB database named CollegeDB and a collection named Students. Insert at least five student documents containing Student_ID, Name, Course, Semester, Marks. Display all documents, find students from a course, update marks, delete one student, and count students.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
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
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
