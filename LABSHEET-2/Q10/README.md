# LABSHEET-2 - Q10

## Question

Demonstrate database sharding using MongoDB. Create at least 20 records, select a shard key, configure sharding, distribute data, verify distribution, and explain the benefit.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
use ShardingDB
db.Students.insertMany(Array.from({length:20},(_,i)=>({Student_ID:i+1,Name:"Student "+(i+1),Course:"BCA"})))
sh.enableSharding("ShardingDB")
sh.shardCollection("ShardingDB.Students",{Student_ID:1})
sh.status()
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
