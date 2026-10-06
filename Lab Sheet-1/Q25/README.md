# LABSHEET-1 - Q25

## Question

Find BCA students whose CGPA is greater than or equal to 8.5.

## Aim

To find BCA students whose CGPA is greater than or equal to 8.5.

## MongoDB Command

```javascript
db.Students.find(
    {
        Department: "BCA",
        CGPA: { $gte: 8.5 }
    },
    { _id: 0 }
)
```

## Explanation

The `find()` method retrieves students from the `Students` collection.

The query selects students whose `Department` is `BCA` and whose CGPA is greater than or equal to 8.5.

The `$gte` operator is used for the CGPA condition.

The projection `{ _id: 0 }` hides the `_id` field.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

BCA students having CGPA greater than or equal to 8.5 were successfully found.
