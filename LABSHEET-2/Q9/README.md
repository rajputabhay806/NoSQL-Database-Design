# LABSHEET-2 - Q9

## Question

Deploy a NoSQL database on a single server/local machine and perform basic database operations: install/configure MongoDB, start server, create database/collection, insert records, CRUD, and verify.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
use LocalNoSQL
db.createCollection("Students")
db.Students.insertMany([{Student_ID:1,Name:"Rishabh Yadav",Course:"BCA",Marks:85},{Student_ID:2,Name:"Mohd Juber",Course:"BCA",Marks:82}])
db.Students.find().pretty()
db.Students.updateOne({Student_ID:1},{$set:{Marks:88}})
db.Students.deleteOne({Student_ID:2})
db.Students.find().pretty()
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
