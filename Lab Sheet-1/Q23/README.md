# LABSHEET-1 - Q23

## Question

Find students whose CGPA is less than 9.

## Aim

To find students whose CGPA is less than 9.

## MongoDB Command

```javascript
db.Students.find(
    { CGPA: { $lt: 9 } },
    { _id: 0 }
)
```

## Explanation

The `find()` method retrieves students from the `Students` collection.

The `$lt` operator selects students whose CGPA is less than 9.

The projection `{ _id: 0 }` hides the `_id` field.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

Students having CGPA less than 9 were successfully found.
