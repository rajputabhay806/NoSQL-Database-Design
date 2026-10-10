// LABSHEET-3 - Q7
// Solution

use CollegeDB
db.Articles.insertMany([
{Title:"MongoDB Guide",Author:"Rishabh",Category:"Database",Tags:["MongoDB","NoSQL"],Status:"Published"},
{Title:"Draft Article",Author:"Harsh",Category:"Technology",Tags:["Draft"],Status:"Unpublished"}
])
db.Articles.find({Status:"Published"})
db.Articles.find({Status:"Unpublished"})
db.Articles.find({Category:"Database",Status:"Published"})
