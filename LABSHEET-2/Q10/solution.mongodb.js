// LABSHEET-2 - Q10
// Solution / commands

use ShardingDB
db.Students.insertMany(Array.from({length:20},(_,i)=>({Student_ID:i+1,Name:"Student "+(i+1),Course:"BCA"})))
sh.enableSharding("ShardingDB")
sh.shardCollection("ShardingDB.Students",{Student_ID:1})
sh.status()
