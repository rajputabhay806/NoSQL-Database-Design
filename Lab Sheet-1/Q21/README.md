# LABSHEET-1 - Q21

## Question

Create the student database and Students collection again, then insert three students.

## Aim

To recreate the `student` database, create a `Students` collection, and insert three student documents.

## MongoDB Commands

```javascript
use student

db.createCollection("Students")

db.Students.insertMany([
    {
        RollNo: 201,
        Name: "Rishabh Yadav",
        Department: "BCA",
        Semester: 5,
        CGPA: 8.5
    },
    {
        RollNo: 202,
        Name: "Mohd Juber",
        Department: "BCA",
        Semester: 5,
        CGPA: 8.2
    },
    {
        RollNo: 203,
        Name: "Harsh Sharma",
        Department: "BCA",
        Semester: 5,
        CGPA: 9.0
    }
])

db.Students.find().pretty()
```

## Explanation

The `use student` command selects the `student` database.

The `createCollection()` method creates the `Students` collection.

The `insertMany()` method inserts three student documents into the collection.

The `find()` method displays the inserted student documents.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The `student` database and `Students` collection were created successfully, and three student documents were inserted.
