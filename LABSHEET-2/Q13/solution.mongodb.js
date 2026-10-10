// LABSHEET-2 - Q13
// Solution / commands

sh.enableSharding("CollegeDB");
sh.shardCollection("CollegeDB.Students",{Student_ID:1});
rs.status();
sh.status();
