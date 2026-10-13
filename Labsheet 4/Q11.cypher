// Create Student, Course, Department nodes and relationships
CREATE (s1:Student {student_id:'S001',name:'Aarav Sharma'}),
       (s2:Student {student_id:'S002',name:'Diya Verma'}),
       (c1:Course {course_id:'C01',name:'BCA'}),
       (c2:Course {course_id:'C02',name:'BSc'}),
       (d:Department {department_id:'D01',name:'Computer Science'}),
       (s1)-[:ENROLLED_IN]->(c1),(s2)-[:ENROLLED_IN]->(c2),
       (c1)-[:OFFERED_BY]->(d),(c2)-[:OFFERED_BY]->(d);
MATCH (s:Student)-[r]->(n) RETURN s,r,n;
