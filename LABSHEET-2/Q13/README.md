# LABSHEET-2 - Q13

## Question

Design and demonstrate a NoSQL architecture combining Sharding and Replication. Create shards, configure replication, insert data, verify distribution and replica availability, and explain scalability and fault tolerance.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
sh.enableSharding("CollegeDB");
sh.shardCollection("CollegeDB.Students",{Student_ID:1});
rs.status();
sh.status();
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
