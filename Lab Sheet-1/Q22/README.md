# LABSHEET-1 - Q22

## Question

Find students whose CGPA is greater than 8.5.

## Aim

To find students whose CGPA is greater than 8.5.

## MongoDB Command

```javascript
db.Students.find(
    { CGPA: { $gt: 8.5 } },
    { _id: 0 }
)
```

## Explanation

The `find()` method retrieves students from the `Students` collection.

The `$gt` operator selects students whose CGPA is greater than 8.5.

The projection `{ _id: 0 }` hides the `_id` field.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

Students having CGPA greater than 8.5 were successfully found.
