// LABSHEET-3 - Q2
// Solution

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
