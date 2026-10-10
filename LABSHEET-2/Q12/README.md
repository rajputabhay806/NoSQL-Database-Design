# LABSHEET-2 - Q12

## Question

Demonstrate Peer-to-Peer Replication using Cassandra. Configure nodes, create keyspace with replication factor, insert data, verify availability, and explain difference from master-slave.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
CREATE KEYSPACE CollegeDB WITH replication={'class':'SimpleStrategy','replication_factor':3};
USE CollegeDB;
CREATE TABLE Students(Student_ID int PRIMARY KEY,Name text,Course text,Marks double);
INSERT INTO Students VALUES(1,'Rishabh Yadav','BCA',85);
SELECT * FROM Students;
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
