
## Q7 — `solution.mongodb.js`

```javascript
// LABSHEET-1 - Q7
// Question: Find all students belonging to the BCA department

db.Student.find({
    Department: "BCA"
}).pretty();