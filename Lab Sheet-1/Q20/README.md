# LABSHEET-1 - Q20

## Question

Drop the complete student database.

## Aim

To remove the complete `student` database from MongoDB.

## MongoDB Commands

```javascript
use student

db.dropDatabase()

show dbs
```

## Explanation

The `use student` command selects the `student` database.

The `dropDatabase()` method removes the complete selected database and all of its collections.

The `show dbs` command is used to display the databases after dropping the `student` database.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The complete `student` database was successfully dropped.
