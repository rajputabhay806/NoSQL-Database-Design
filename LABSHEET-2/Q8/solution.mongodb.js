// LABSHEET-2 - Q8
// Solution / commands

// MongoDB
db.Students.find({Course:"BCA"});

/* Cassandra
SELECT * FROM Students WHERE Student_ID=1;

/* Neo4j
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course) RETURN s,c; */
