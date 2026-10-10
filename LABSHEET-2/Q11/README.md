# LABSHEET-2 - Q11

## Question

Demonstrate Master-Slave (Primary-Secondary) Replication using a suitable NoSQL database. Configure primary and secondary, insert data, verify replication, and explain primary failure.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
rs.initiate({_id:"studentRS",members:[{_id:0,host:"localhost:27017"},{_id:1,host:"localhost:27018"}]});
use CollegeDB
db.Students.insertOne({Student_ID:1,Name:"Rishabh Yadav",Course:"BCA",Marks:85});
rs.status();
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
