# LABSHEET-2 - Q4

## Question

Using a key-value database such as Redis, create a simple student information system. Store student ID as key and name as value, insert five, retrieve, update, delete, and display keys.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
SET student:1 "Rishabh Yadav"
SET student:2 "Mohd Juber"
SET student:3 "Harsh Sharma"
SET student:4 "Aman Singh"
SET student:5 "Sorav Verma"
GET student:1
SET student:1 "Rishabh Kumar"
DEL student:5
KEYS student:*
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
