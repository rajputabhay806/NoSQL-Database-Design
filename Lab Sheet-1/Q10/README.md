# LABSHEET-1 - Q10

## Question

Update the semester of all BCA students to 6.

## Aim

To update the semester of all students belonging to the BCA department to semester 6.

## MongoDB Command

```javascript
db.Student.updateMany(
    { Department: "BCA" },
    { $set: { Semester: 6 } }
)