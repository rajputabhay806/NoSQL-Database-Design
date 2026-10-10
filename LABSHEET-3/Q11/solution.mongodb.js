// LABSHEET-3 - Q11
// Solution

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
