// LABSHEET-3 - Q6
// Solution

use CollegeDB
db.PageVisits.insertMany([
{Page:"/home",User_ID:1,Device:"Mobile",Browser:"Chrome",Location:"Delhi",Timestamp:new Date()},
{Page:"/home",User_ID:2,Device:"Desktop",Browser:"Chrome",Location:"Dehradun",Timestamp:new Date()},
{Page:"/products",User_ID:1,Device:"Mobile",Browser:"Safari",Location:"Delhi",Timestamp:new Date()},
{Page:"/home",User_ID:3,Device:"Mobile",Browser:"Chrome",Location:"Mumbai",Timestamp:new Date()}
])
db.PageVisits.aggregate([{$group:{_id:"$Page",Visits:{$sum:1}}},{$sort:{Visits:-1}}])
db.PageVisits.aggregate([{$group:{_id:"$Device",Uses:{$sum:1}}},{$sort:{Uses:-1}}])
