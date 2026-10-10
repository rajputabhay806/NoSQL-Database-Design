// LABSHEET-3 - Q10
// Solution

use CollegeDB
db.Inventory.insertMany([
{Product_ID:101,Name:"Laptop",Stock:5,MinimumStock:10,Supplier:"ABC Suppliers",RestockDate:new Date()},
{Product_ID:102,Name:"Mouse",Stock:25,MinimumStock:10,Supplier:"XYZ Suppliers",RestockDate:new Date()},
{Product_ID:103,Name:"Keyboard",Stock:3,MinimumStock:8,Supplier:"ABC Suppliers",RestockDate:new Date()}
])
db.Inventory.find({$expr:{$lte:["$Stock","$MinimumStock"]}})
