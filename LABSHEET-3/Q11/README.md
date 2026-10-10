# LABSHEET-3 - Q11

## Question

Implement a Bank Wallet Transfer System using MongoDB transactions. Transfer an amount between two users and ensure that both balance updates are completed atomically.

## Aim

To design and implement the MongoDB system described in this practical.

## MongoDB Commands

```javascript
use CollegeDB
db.Wallets.insertMany([{User_ID:1,Name:"Rishabh",Balance:10000},{User_ID:2,Name:"Harsh",Balance:5000}])
const session=db.getMongo().startSession()
session.startTransaction()
try {
  const wallets=session.getDatabase("CollegeDB").Wallets
  wallets.updateOne({User_ID:1},{$inc:{Balance:-1000}})
  wallets.updateOne({User_ID:2},{$inc:{Balance:1000}})
  session.commitTransaction()
} catch(e) {
  session.abortTransaction()
  throw e
} finally {
  session.endSession()
}
```

## Explanation

The commands demonstrate the required data model, operations, queries, and retrieval conditions for the practical.

## Technology Used

- MongoDB
- MongoDB Shell (mongosh)

## Result

The required MongoDB database design and operations were successfully defined.
