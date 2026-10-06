// LABSHEET-1 - Q13
// Question: Remove the Email field from all students

db.Student.updateMany(
    {},
    { $unset: { Email: "" } }
);
