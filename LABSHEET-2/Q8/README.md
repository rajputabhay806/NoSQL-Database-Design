# LABSHEET-2 - Q8

## Question

Implement the same simple student-related dataset using MongoDB, Cassandra, and Neo4j. Compare data model, storage structure, query method, scalability, and suitable applications.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
// MongoDB
db.Students.find({Course:"BCA"});

/* Cassandra
SELECT * FROM Students WHERE Student_ID=1;

/* Neo4j
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course) RETURN s,c; */
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
