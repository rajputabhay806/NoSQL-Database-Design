# LABSHEET-3 - Q7

## Question

Design a Content Management System for storing articles, authors, categories, tags, and publication status. Write queries to retrieve published and unpublished content according to different criteria.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Articles.insertMany([
{Title:"MongoDB Guide",Author:"Rishabh",Category:"Database",Tags:["MongoDB","NoSQL"],Status:"Published"},
{Title:"Draft Article",Author:"Harsh",Category:"Technology",Tags:["Draft"],Status:"Unpublished"}
])
db.Articles.find({Status:"Published"})
db.Articles.find({Status:"Unpublished"})
db.Articles.find({Category:"Database",Status:"Published"})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
