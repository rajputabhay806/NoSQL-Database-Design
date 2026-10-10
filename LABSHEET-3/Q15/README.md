# LABSHEET-3 - Q15

## Question

Develop a Flexible News Database in which different news articles may contain different fields such as author, location, category, tags, images, and sources. Write queries to search articles despite variations in document structure.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
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
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
