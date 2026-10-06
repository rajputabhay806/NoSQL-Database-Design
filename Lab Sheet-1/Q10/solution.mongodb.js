
## Q10 — `solution.mongodb.js`

```javascript
// LABSHEET-1 - Q10
// Question: Update the semester of all BCA students to 6

db.Student.updateMany(
    { Department: "BCA" },
    { $set: { Semester: 6 } }
);