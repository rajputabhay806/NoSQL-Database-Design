# LABSHEET-1 - Q7

## Question

Find all students belonging to the BCA department.

## Aim

To find all students whose department is BCA.

## MongoDB Command

```javascript
db.Student.find({
    Department: "BCA"
}).pretty()