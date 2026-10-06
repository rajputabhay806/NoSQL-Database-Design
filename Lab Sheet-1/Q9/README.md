# LABSHEET-1 - Q9

## Question

Update the department of Roll No. 102.

## Aim

To update the department of the student whose Roll Number is 102.

## MongoDB Commands

```javascript
db.Student.updateOne(
    { RollNo: 102 },
    { $set: { Department: "BCA-AI" } }
)

db.Student.findOne({ RollNo: 102 })