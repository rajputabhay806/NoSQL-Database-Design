# LABSHEET-1 - Q14

## Question

Delete the student with Roll No. 105.

## Aim

To delete the student document having Roll Number 105.

## MongoDB Commands

```javascript
db.Student.deleteOne({ RollNo: 105 })

db.Student.findOne({ RollNo: 105 })
```

## Explanation

The `deleteOne()` method deletes one document that matches the specified filter.

The student with `RollNo: 105` is selected for deletion.

The `findOne()` command is used to check the student document after deletion.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The student with Roll Number 105 was successfully deleted.
