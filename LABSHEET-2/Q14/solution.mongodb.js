// LABSHEET-2 - Q14
// Solution / commands

use CollegeDB
var mapFunction=function(){emit(this.Course,{count:1,totalMarks:this.Marks});};
var reduceFunction=function(course,values){var r={count:0,totalMarks:0};values.forEach(function(v){r.count+=v.count;r.totalMarks+=v.totalMarks;});return r;};
db.Students.mapReduce(mapFunction,reduceFunction,{out:"CourseStatistics"});
db.CourseStatistics.find().pretty();
