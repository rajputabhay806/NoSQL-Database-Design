// LABSHEET-3 - Q12
// Solution

use CollegeDB
db.Notifications.insertMany([
{User_ID:1,Type:"message",Message:"New message",Read:false,CreatedAt:new Date()},
{User_ID:1,Type:"order-update",Message:"Order shipped",Read:false,CreatedAt:new Date()},
{User_ID:2,Type:"system-alert",Message:"Password changed",Read:true,CreatedAt:new Date()}
])
db.Notifications.find({User_ID:1,Read:false})
db.Notifications.updateMany({User_ID:1,Read:false},{$set:{Read:true}})
