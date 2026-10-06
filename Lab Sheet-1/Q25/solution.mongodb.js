// LABSHEET-1 - Q25
// Question: Find BCA students whose CGPA is greater than or equal to 8.5

db.Students.find(
    {
        Department: "BCA",
        CGPA: { $gte: 8.5 }
    },
    { _id: 0 }
);
