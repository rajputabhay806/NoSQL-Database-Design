# LABSHEET-3 - Q14

## Question

Create a Real-Time Order Tracking System where an order moves through stages such as Placed, Confirmed, Shipped, and Delivered. Store the complete status history and retrieve the current status of an order.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.OrderTracking.insertOne({
Order_ID:1,
CurrentStatus:"Placed",
StatusHistory:[{Status:"Placed",Time:new Date()}]
})
db.OrderTracking.updateOne({Order_ID:1},{$set:{CurrentStatus:"Confirmed"},$push:{StatusHistory:{Status:"Confirmed",Time:new Date()}}})
db.OrderTracking.updateOne({Order_ID:1},{$set:{CurrentStatus:"Shipped"},$push:{StatusHistory:{Status:"Shipped",Time:new Date()}}})
db.OrderTracking.updateOne({Order_ID:1},{$set:{CurrentStatus:"Delivered"},$push:{StatusHistory:{Status:"Delivered",Time:new Date()}}})
db.OrderTracking.findOne({Order_ID:1},{CurrentStatus:1,StatusHistory:1})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
