// LABSHEET-3 - Q4
// Solution

use CollegeDB
db.Products.insertMany([
{Category:"Laptop",Name:"ThinkPad",Attributes:{RAM:16,Storage:"512GB",Processor:"i7"}},
{Category:"Mobile",Name:"Galaxy",Attributes:{RAM:8,Storage:"256GB",Camera:"50MP"}},
{Category:"Camera",Name:"Alpha",Attributes:{Megapixels:24,Lens:"50mm",Video:"4K"}}
])
db.Products.find({Category:"Laptop","Attributes.RAM":{$gte:16}})
db.Products.find({Category:"Mobile","Attributes.Camera":"50MP"})
db.Products.find({Category:"Camera","Attributes.Megapixels":{$gte:20}})
