
## Q9 — `solution.mongodb.js`

```javascript
// LABSHEET-1 - Q9
// Question: Update the department of Roll No. 102

db.Student.updateOne(
    { RollNo: 102 },
    { $set: { Department: "BCA-AI" } }
);

db.Student.findOne({ RollNo: 102 });