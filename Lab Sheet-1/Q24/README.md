# LABSHEET-1 - Q24

## Question

Find students whose CGPA is greater than or equal to 8.5.

## Aim

To find students whose CGPA is greater than or equal to 8.5.

## MongoDB Command

```javascript
db.Students.find(
    { CGPA: { $gte: 8.5 } },
    { _id: 0 }
)
```

## Explanation

The `find()` method retrieves students from the `Students` collection.

The `$gte` operator selects students whose CGPA is greater than or equal to 8.5.

The projection `{ _id: 0 }` hides the `_id` field.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

Students having CGPA greater than or equal to 8.5 were successfully found.
