# LABSHEET-3 - Q5

## Question

Develop an E-Commerce Order Management System containing customers, products, and orders. Write queries to retrieve a customer's complete purchase history and calculate order totals.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Orders.insertMany([
{Order_ID:1,Customer_ID:101,Products:[{Name:"Laptop",Qty:1,Price:50000},{Name:"Mouse",Qty:2,Price:800}]},
{Order_ID:2,Customer_ID:101,Products:[{Name:"Keyboard",Qty:1,Price:1500}]},
{Order_ID:3,Customer_ID:102,Products:[{Name:"Mobile",Qty:1,Price:30000}]}
])
db.Orders.find({Customer_ID:101})
db.Orders.aggregate([{$project:{Order_ID:1,Customer_ID:1,Total:{$sum:{$map:{input:"$Products",as:"p",in:{$multiply:["$$p.Qty","$$p.Price"]}}}}}}])
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
