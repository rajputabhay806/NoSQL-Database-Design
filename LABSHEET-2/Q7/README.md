# LABSHEET-2 - Q7

## Question

Create a simple Student–Course relationship graph using Neo4j. Create five students and three courses, display students, find students in a course, display courses of a student, and add/remove a relationship.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
CREATE (:Student {Student_ID:1,Name:"Rishabh Yadav"}),(:Student {Student_ID:2,Name:"Mohd Juber"}),(:Student {Student_ID:3,Name:"Harsh Sharma"}),(:Student {Student_ID:4,Name:"Aman Singh"}),(:Student {Student_ID:5,Name:"Sorav Verma"});
CREATE (:Course {Name:"BCA"}),(:Course {Name:"BTech"}),(:Course {Name:"MCA"});
MATCH(s:Student {Student_ID:1}),(c:Course {Name:"BCA"}) CREATE(s)-[:ENROLLED_IN]->(c);
MATCH(s:Student {Student_ID:2}),(c:Course {Name:"BCA"}) CREATE(s)-[:ENROLLED_IN]->(c);
MATCH(s:Student {Student_ID:3}),(c:Course {Name:"BCA"}) CREATE(s)-[:ENROLLED_IN]->(c);
MATCH(s:Student {Student_ID:4}),(c:Course {Name:"BTech"}) CREATE(s)-[:ENROLLED_IN]->(c);
MATCH(s:Student {Student_ID:5}),(c:Course {Name:"MCA"}) CREATE(s)-[:ENROLLED_IN]->(c);
MATCH(s:Student) RETURN s;
MATCH(s:Student)-[:ENROLLED_IN]->(c:Course {Name:"BCA"}) RETURN s;
MATCH(s:Student {Student_ID:1})-[:ENROLLED_IN]->(c:Course) RETURN c;
MATCH(s:Student {Student_ID:1}),(c:Course {Name:"MCA"}) CREATE(s)-[:ENROLLED_IN]->(c);
MATCH(s:Student {Student_ID:1})-[r:ENROLLED_IN]->(c:Course {Name:"MCA"}) DELETE r;
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
