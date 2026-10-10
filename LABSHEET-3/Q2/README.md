# LABSHEET-3 - Q2

## Question

Develop an Event Logging System that records login, logout, failed-login, file-upload, and password-change events. Use MongoDB queries to identify repeated failed-login attempts and frequently occurring events.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.EventLogs.insertMany([
{User_ID:1,Event:"login",Timestamp:new Date()},
{User_ID:1,Event:"failed-login",Timestamp:new Date()},
{User_ID:1,Event:"failed-login",Timestamp:new Date()},
{User_ID:2,Event:"file-upload",Timestamp:new Date()},
{User_ID:2,Event:"logout",Timestamp:new Date()},
{User_ID:2,Event:"password-change",Timestamp:new Date()}
])
db.EventLogs.find({Event:"failed-login"})
db.EventLogs.aggregate([{$group:{_id:"$Event",Count:{$sum:1}}},{$sort:{Count:-1}}])
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
