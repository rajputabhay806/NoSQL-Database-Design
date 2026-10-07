// LABSHEET-2 - Q3
// Solution / commands

use CollegeDB
db.Orders.insertMany([
{Order_ID:1,Customer:{Name:"Rishabh Yadav"},Products:[{Name:"Laptop",Quantity:1,Price:50000},{Name:"Mouse",Quantity:2,Price:800}]},
{Order_ID:2,Customer:{Name:"Mohd Juber"},Products:[{Name:"Keyboard",Quantity:1,Price:1500},{Name:"Monitor",Quantity:1,Price:12000}]},
{Order_ID:3,Customer:{Name:"Harsh Sharma"},Products:[{Name:"Laptop",Quantity:1,Price:60000}]},
{Order_ID:4,Customer:{Name:"Aman Singh"},Products:[{Name:"Headphones",Quantity:2,Price:2500}]},
{Order_ID:5,Customer:{Name:"Sorav Verma"},Products:[{Name:"Tablet",Quantity:1,Price:20000}]}]);
db.Orders.find({"Customer.Name":"Rishabh Yadav"}).pretty();
db.Orders.updateOne({Order_ID:1,"Products.Name":"Mouse"},{$set:{"Products.$.Quantity":3}});
db.Orders.aggregate([{$project:{Order_ID:1,Customer:1,TotalAmount:{$sum:{$map:{input:"$Products",as:"p",in:{$multiply:["$$p.Quantity","$$p.Price"]}}}}}}]);
db.Orders.aggregate([{$project:{Order_ID:1,Customer:1,TotalAmount:{$sum:{$map:{input:"$Products",as:"p",in:{$multiply:["$$p.Quantity","$$p.Price"]}}}}}},{$match:{TotalAmount:{$gt:10000}}}]);
