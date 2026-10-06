# LABSHEET-1 - Q13

## Question

Remove the Email field from all students.

## Aim

To remove the `Email` field from all student documents.

## MongoDB Command

```javascript
db.Student.updateMany(
    {},
    { $unset: { Email: "" } }
)
```

## Explanation

The `updateMany()` method is used to update all student documents.

The `$unset` operator removes the `Email` field from every student document.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The Email field was successfully removed from all student documents.
