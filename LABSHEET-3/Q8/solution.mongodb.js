// LABSHEET-3 - Q8
// Solution

use CollegeDB
db.Carts.insertOne({User_ID:1,Products:[{Product_ID:101,Name:"Laptop",Quantity:1,Price:50000}]})
db.Carts.updateOne({User_ID:1},{$push:{Products:{Product_ID:102,Name:"Mouse",Quantity:2,Price:800}}})
db.Carts.updateOne({User_ID:1,"Products.Product_ID":102},{$set:{"Products.$.Quantity":3}})
db.Carts.updateOne({User_ID:1},{$pull:{Products:{Product_ID:101}}})
db.Carts.aggregate([{$match:{User_ID:1}},{$project:{Total:{$sum:{$map:{input:"$Products",as:"p",in:{$multiply:["$$p.Quantity","$$p.Price"]}}}}}}])
