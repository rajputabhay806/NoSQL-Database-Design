# LABSHEET-3 - Q10

## Question

Design an Inventory Monitoring System containing product stock, minimum stock level, supplier, and restocking date. Write queries to identify products that need immediate restocking.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Inventory.insertMany([
{Product_ID:101,Name:"Laptop",Stock:5,MinimumStock:10,Supplier:"ABC Suppliers",RestockDate:new Date()},
{Product_ID:102,Name:"Mouse",Stock:25,MinimumStock:10,Supplier:"XYZ Suppliers",RestockDate:new Date()},
{Product_ID:103,Name:"Keyboard",Stock:3,MinimumStock:8,Supplier:"ABC Suppliers",RestockDate:new Date()}
])
db.Inventory.find({$expr:{$lte:["$Stock","$MinimumStock"]}})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
