# LABSHEET-1 - Q11

## Question

Replace the complete document of Roll No. 103.

## Aim

To replace the complete student document having Roll Number 103.

## MongoDB Commands

```javascript
db.Student.replaceOne(
    { RollNo: 103 },
    {
        RollNo: 103,
        Name: "Harsh Sharma",
        Department: "BCA",
        Semester: 6,
        CGPA: 9.3
    }
)

db.Student.findOne({ RollNo: 103 })
```

## Explanation

The `replaceOne()` method replaces the complete document that matches the specified filter.

The student with `RollNo: 103` is replaced with the new document containing the updated student details.

The `findOne()` command is used to view the replaced document.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The complete document of the student with Roll Number 103 was successfully replaced.
