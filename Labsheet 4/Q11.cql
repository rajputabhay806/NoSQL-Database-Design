-- Q11: Cassandra CollegeDB and Students table
-- For a local single-node installation, replication_factor 1 is appropriate.
CREATE KEYSPACE IF NOT EXISTS CollegeDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE CollegeDB;

CREATE TABLE IF NOT EXISTS Students (
    student_id text PRIMARY KEY,
    name text,
    age int,
    course text,
    semester int
);

INSERT INTO Students (student_id, name, age, course, semester)
VALUES ('S001', 'Aarav Sharma', 20, 'BCA', 4);
INSERT INTO Students (student_id, name, age, course, semester)
VALUES ('S002', 'Diya Verma', 19, 'BCA', 2);
INSERT INTO Students (student_id, name, age, course, semester)
VALUES ('S003', 'Kabir Singh', 21, 'BSc', 6);
INSERT INTO Students (student_id, name, age, course, semester)
VALUES ('S004', 'Meera Gupta', 20, 'BCA', 4);
INSERT INTO Students (student_id, name, age, course, semester)
VALUES ('S005', 'Rohan Patel', 22, 'MCA', 2);

SELECT * FROM Students;
SELECT * FROM Students WHERE student_id = 'S003';
