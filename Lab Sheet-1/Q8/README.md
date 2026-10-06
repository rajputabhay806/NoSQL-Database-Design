# LABSHEET-1 - Q8

## Question

Display only the Name and Department of BCA students.

## Aim

To display only the `Name` and `Department` fields of students belonging to the BCA department.

## MongoDB Command

```javascript
db.Student.find(
    { Department: "BCA" },
    { _id: 0, Name: 1, Department: 1 }
)