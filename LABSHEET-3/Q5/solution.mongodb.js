// LABSHEET-3 - Q5
// Solution

use CollegeDB
db.Orders.insertMany([
{Order_ID:1,Customer_ID:101,Products:[{Name:"Laptop",Qty:1,Price:50000},{Name:"Mouse",Qty:2,Price:800}]},
{Order_ID:2,Customer_ID:101,Products:[{Name:"Keyboard",Qty:1,Price:1500}]},
{Order_ID:3,Customer_ID:102,Products:[{Name:"Mobile",Qty:1,Price:30000}]}
])
db.Orders.find({Customer_ID:101})
db.Orders.aggregate([{$project:{Order_ID:1,Customer_ID:1,Total:{$sum:{$map:{input:"$Products",as:"p",in:{$multiply:["$$p.Qty","$$p.Price"]}}}}}}])
