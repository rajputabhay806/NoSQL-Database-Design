# LABSHEET-3 - Q4

## Question

Design a Flexible Product Catalog where laptops, mobiles, and cameras have different sets of attributes. Store them in a common collection and write queries to search category-specific properties.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Products.insertMany([
{Category:"Laptop",Name:"ThinkPad",Attributes:{RAM:16,Storage:"512GB",Processor:"i7"}},
{Category:"Mobile",Name:"Galaxy",Attributes:{RAM:8,Storage:"256GB",Camera:"50MP"}},
{Category:"Camera",Name:"Alpha",Attributes:{Megapixels:24,Lens:"50mm",Video:"4K"}}
])
db.Products.find({Category:"Laptop","Attributes.RAM":{$gte:16}})
db.Products.find({Category:"Mobile","Attributes.Camera":"50MP"})
db.Products.find({Category:"Camera","Attributes.Megapixels":{$gte:20}})
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
