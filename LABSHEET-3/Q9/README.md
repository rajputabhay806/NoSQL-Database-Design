# LABSHEET-3 - Q9

## Question

Create a Product Review and Rating System in MongoDB. Store customer reviews and use aggregation to calculate the average rating and number of reviews for each product.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Reviews.insertMany([
{Product_ID:101,Customer_ID:1,Rating:5,Review:"Excellent"},
{Product_ID:101,Customer_ID:2,Rating:4,Review:"Good"},
{Product_ID:102,Customer_ID:3,Rating:5,Review:"Excellent"},
{Product_ID:102,Customer_ID:4,Rating:3,Review:"Average"}
])
db.Reviews.aggregate([{$group:{_id:"$Product_ID",AverageRating:{$avg:"$Rating"},ReviewCount:{$sum:1}}}])
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
