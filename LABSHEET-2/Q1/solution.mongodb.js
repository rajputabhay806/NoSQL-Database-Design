// LABSHEET-2 - Q1
// Solution / commands

MySQL:
CREATE DATABASE CollegeDB;
USE CollegeDB;
CREATE TABLE Student (Student_ID INT PRIMARY KEY, Name VARCHAR(100), Course VARCHAR(50), Semester INT, Marks DECIMAL(5,2));
INSERT INTO Student VALUES
(1,'Rishabh Yadav','BCA',5,85),(2,'Mohd Juber','BCA',5,82),(3,'Harsh Sharma','BCA',5,90),(4,'Aman Singh','BTech',5,78),(5,'Sorav Verma','BCA',4,87);

MongoDB:
use CollegeDB
db.Students.insertMany([
{Student_ID:1,Name:"Rishabh Yadav",Course:"BCA",Semester:5,Marks:85},
{Student_ID:2,Name:"Mohd Juber",Course:"BCA",Semester:5,Marks:82},
{Student_ID:3,Name:"Harsh Sharma",Course:"BCA",Semester:5,Marks:90},
{Student_ID:4,Name:"Aman Singh",Course:"BTech",Semester:5,Marks:78},
{Student_ID:5,Name:"Sorav Verma",Course:"BCA",Semester:4,Marks:87}]);
