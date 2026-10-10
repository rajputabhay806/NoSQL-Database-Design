# LABSHEET-3 - Q8

## Question

Implement a Shopping Cart System using embedded MongoDB documents. Perform operations for adding products, changing quantities, removing products, and calculating the cart value.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Carts.insertOne({User_ID:1,Products:[{Product_ID:101,Name:"Laptop",Quantity:1,Price:50000}]})
db.Carts.updateOne({User_ID:1},{$push:{Products:{Product_ID:102,Name:"Mouse",Quantity:2,Price:800}}})
db.Carts.updateOne({User_ID:1,"Products.Product_ID":102},{$set:{"Products.$.Quantity":3}})
db.Carts.updateOne({User_ID:1},{$pull:{Products:{Product_ID:101}}})
db.Carts.aggregate([{$match:{User_ID:1}},{$project:{Total:{$sum:{$map:{input:"$Products",as:"p",in:{$multiply:["$$p.Quantity","$$p.Price"]}}}}}}])
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
