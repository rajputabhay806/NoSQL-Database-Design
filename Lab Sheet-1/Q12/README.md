# LABSHEET-1 - Q12

## Question

Add an Email field to all students.

## Aim

To add an `Email` field to all student documents.

## MongoDB Command

```javascript
db.Student.updateMany(
    {},
    { $set: { Email: "student@example.com" } }
)
```

## Explanation

The `updateMany()` method is used to update all documents in the `Student` collection.

The `$set` operator adds the `Email` field to every student document.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

An Email field was successfully added to all student documents.
