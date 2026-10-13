-- Q12: Cassandra CRUD operations on Employees
CREATE KEYSPACE IF NOT EXISTS CompanyDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE CompanyDB;

CREATE TABLE IF NOT EXISTS Employees (
    employee_id text PRIMARY KEY,
    name text,
    department text,
    job_title text,
    salary decimal
);

-- CREATE / INSERT
INSERT INTO Employees (employee_id, name, department, job_title, salary)
VALUES ('E001', 'Ananya Rao', 'IT', 'Developer', 55000);
INSERT INTO Employees (employee_id, name, department, job_title, salary)
VALUES ('E002', 'Vikram Joshi', 'HR', 'Recruiter', 48000);

-- READ
SELECT * FROM Employees;
SELECT * FROM Employees WHERE employee_id = 'E001';

-- UPDATE
UPDATE Employees SET salary = 60000, job_title = 'Senior Developer'
WHERE employee_id = 'E001';
SELECT * FROM Employees WHERE employee_id = 'E001';

-- DELETE
DELETE salary FROM Employees WHERE employee_id = 'E002';
DELETE FROM Employees WHERE employee_id = 'E002';
SELECT * FROM Employees;
