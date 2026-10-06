// LABSHEET-1 - Q12
// Question: Add an Email field to all students

db.Student.updateMany(
    {},
    { $set: { Email: "student@example.com" } }
);
