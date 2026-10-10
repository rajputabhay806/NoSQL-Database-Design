# LABSHEET-3 - Q12

## Question

Create a User Notification System for messages, order updates, and system alerts. Write queries to retrieve unread notifications and update them after the user views them.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Notifications.insertMany([
{User_ID:1,Type:"message",Message:"New message",Read:false,CreatedAt:new Date()},
{User_ID:1,Type:"order-update",Message:"Order shipped",Read:false,CreatedAt:new Date()},
{User_ID:2,Type:"system-alert",Message:"Password changed",Read:true,CreatedAt:new Date()}
])
db.Notifications.find({User_ID:1,Read:false})
db.Notifications.updateMany({User_ID:1,Read:false},{$set:{Read:true}})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
