// LABSHEET-3 - Q14
// Solution

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
