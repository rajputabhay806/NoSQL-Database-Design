// LABSHEET-3 - Q15
// Solution

use CollegeDB
db.News.insertMany([
{Title:"Tech Conference",Author:"Rishabh",Category:"Technology",Tags:["AI","MongoDB"],Images:["tech.jpg"],Source:"NewsOne"},
{Title:"City Update",Location:"Dehradun",Category:"Local",Tags:["City"],Source:"NewsTwo"},
{Title:"Sports News",Author:"Harsh",Category:"Sports",Tags:["Cricket"],Images:["sports.jpg"]}
])
db.News.find({Category:"Technology"})
db.News.find({Tags:"MongoDB"})
db.News.find({Location:"Dehradun"})
db.News.find({$or:[{Author:"Rishabh"},{Location:"Dehradun"},{Tags:"Cricket"}]})
