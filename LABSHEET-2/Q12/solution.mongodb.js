// LABSHEET-2 - Q12
// Solution / commands

CREATE KEYSPACE CollegeDB WITH replication={'class':'SimpleStrategy','replication_factor':3};
USE CollegeDB;
CREATE TABLE Students(Student_ID int PRIMARY KEY,Name text,Course text,Marks double);
INSERT INTO Students VALUES(1,'Rishabh Yadav','BCA',85);
SELECT * FROM Students;
