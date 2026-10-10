// LABSHEET-2 - Q7
// Solution / commands

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
