# LABSHEET-1 - Q17

## Question

Rename the Student collection to StudentDetails.

## Aim

To rename the `Student` collection to `StudentDetails`.

## MongoDB Commands

```javascript
db.Student.renameCollection("StudentDetails")

show collections
```

## Explanation

The `renameCollection()` method changes the name of an existing collection.

The `Student` collection is renamed to `StudentDetails`.

The `show collections` command is used to display the available collections after renaming.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The `Student` collection was successfully renamed to `StudentDetails`.
