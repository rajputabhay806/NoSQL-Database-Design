
## Q8 — `solution.mongodb.js`

```javascript
// LABSHEET-1 - Q8
// Question: Display only the Name and Department of BCA students

db.Student.find(
    { Department: "BCA" },
    { _id: 0, Name: 1, Department: 1 }
);