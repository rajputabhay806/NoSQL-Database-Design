# LABSHEET-2 - Q5

## Question

Create a Cassandra keyspace named CollegeDB and table Students with Student_ID, Name, Course, Semester, Marks. Insert five, display, retrieve by course, update marks, and delete.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
CREATE KEYSPACE CollegeDB WITH replication={'class':'SimpleStrategy','replication_factor':1};
USE CollegeDB;
CREATE TABLE Students(Student_ID int PRIMARY KEY,Name text,Course text,Semester int,Marks double);
INSERT INTO Students VALUES(1,'Rishabh Yadav','BCA',5,85);
INSERT INTO Students VALUES(2,'Mohd Juber','BCA',5,82);
INSERT INTO Students VALUES(3,'Harsh Sharma','BCA',5,90);
INSERT INTO Students VALUES(4,'Aman Singh','BTech',5,78);
INSERT INTO Students VALUES(5,'Sorav Verma','BCA',4,87);
SELECT * FROM Students;
SELECT * FROM Students WHERE Course='BCA' ALLOW FILTERING;
UPDATE Students SET Marks=88 WHERE Student_ID=1;
DELETE FROM Students WHERE Student_ID=5;
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
