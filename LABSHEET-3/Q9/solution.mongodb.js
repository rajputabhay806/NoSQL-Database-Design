// LABSHEET-3 - Q9
// Solution

use CollegeDB
db.Reviews.insertMany([
{Product_ID:101,Customer_ID:1,Rating:5,Review:"Excellent"},
{Product_ID:101,Customer_ID:2,Rating:4,Review:"Good"},
{Product_ID:102,Customer_ID:3,Rating:5,Review:"Excellent"},
{Product_ID:102,Customer_ID:4,Rating:3,Review:"Average"}
])
db.Reviews.aggregate([{$group:{_id:"$Product_ID",AverageRating:{$avg:"$Rating"},ReviewCount:{$sum:1}}}])
