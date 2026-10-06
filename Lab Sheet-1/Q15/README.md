# LABSHEET-1 - Q15

## Question

Delete all students having CGPA less than 8.

## Aim

To delete all student documents whose CGPA is less than 8.

## MongoDB Commands

```javascript
db.Student.deleteMany({ CGPA: { $lt: 8 } })

db.Student.find({ CGPA: { $lt: 8 } })
```

## Explanation

The `deleteMany()` method is used to delete multiple student documents.

The `$lt` operator selects students whose CGPA is less than 8.

The `find()` command is used to check for students matching the same condition.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

All students having CGPA less than 8 were successfully deleted.
