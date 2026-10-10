// LABSHEET-2 - Q5
// Solution / commands

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
