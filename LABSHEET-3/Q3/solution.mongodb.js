// LABSHEET-3 - Q3
// Solution

use CollegeDB
db.Blogs.insertMany([
{Title:"MongoDB Basics",Author:"Rishabh",Category:"Database",Tags:["MongoDB","NoSQL"],Comments:[{User:"Aman",Text:"Useful"}],Publication:{Status:"Published",Date:new Date()}},
{Title:"NoSQL Design",Author:"Harsh",Category:"Database",Tags:["NoSQL","Design"],Comments:[],Publication:{Status:"Published",Date:new Date()}}
])
db.Blogs.find({Tags:"MongoDB"})
db.Blogs.find({Category:"Database",Tags:"NoSQL"})
db.Blogs.find({Category:"Database",Tags:{$all:["NoSQL","Design"]}})
