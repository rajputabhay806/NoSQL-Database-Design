# LABSHEET-3 - Q3

## Question

Create a Mini Blogging Platform using MongoDB where each blog contains author, category, tags, comments, and publication information. Retrieve blogs using different combinations of tags and categories.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Blogs.insertMany([
{Title:"MongoDB Basics",Author:"Rishabh",Category:"Database",Tags:["MongoDB","NoSQL"],Comments:[{User:"Aman",Text:"Useful"}],Publication:{Status:"Published",Date:new Date()}},
{Title:"NoSQL Design",Author:"Harsh",Category:"Database",Tags:["NoSQL","Design"],Comments:[],Publication:{Status:"Published",Date:new Date()}}
])
db.Blogs.find({Tags:"MongoDB"})
db.Blogs.find({Category:"Database",Tags:"NoSQL"})
db.Blogs.find({Category:"Database",Tags:{$all:["NoSQL","Design"]}})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
