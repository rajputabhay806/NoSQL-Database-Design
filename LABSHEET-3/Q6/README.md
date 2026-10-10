# LABSHEET-3 - Q6

## Question

Create a Website Analytics System that stores page visits, user ID, device, browser, location, and timestamp. Use aggregation to identify the most visited pages and commonly used devices.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.PageVisits.insertMany([
{Page:"/home",User_ID:1,Device:"Mobile",Browser:"Chrome",Location:"Delhi",Timestamp:new Date()},
{Page:"/home",User_ID:2,Device:"Desktop",Browser:"Chrome",Location:"Dehradun",Timestamp:new Date()},
{Page:"/products",User_ID:1,Device:"Mobile",Browser:"Safari",Location:"Delhi",Timestamp:new Date()},
{Page:"/home",User_ID:3,Device:"Mobile",Browser:"Chrome",Location:"Mumbai",Timestamp:new Date()}
])
db.PageVisits.aggregate([{$group:{_id:"$Page",Visits:{$sum:1}}},{$sort:{Visits:-1}}])
db.PageVisits.aggregate([{$group:{_id:"$Device",Uses:{$sum:1}}},{$sort:{Uses:-1}}])
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
