# LABSHEET-2 - Q6

## Question

Using HBase, create a table named Students with column families personal and academic. Insert five records, retrieve, update, scan, and delete.

## Aim

To perform and understand the NoSQL database operation described in this practical.

## Commands / Solution

```text
create 'Students','personal','academic'
put 'Students','1','personal:Name','Rishabh Yadav'
put 'Students','1','personal:Course','BCA'
put 'Students','1','academic:Semester','5'
put 'Students','1','academic:Marks','85'
put 'Students','2','personal:Name','Mohd Juber'
put 'Students','2','personal:Course','BCA'
put 'Students','2','academic:Semester','5'
put 'Students','2','academic:Marks','82'
put 'Students','3','personal:Name','Harsh Sharma'
put 'Students','3','personal:Course','BCA'
put 'Students','3','academic:Semester','5'
put 'Students','3','academic:Marks','90'
put 'Students','4','personal:Name','Aman Singh'
put 'Students','4','personal:Course','BTech'
put 'Students','4','academic:Semester','5'
put 'Students','4','academic:Marks','78'
put 'Students','5','personal:Name','Sorav Verma'
put 'Students','5','personal:Course','BCA'
put 'Students','5','academic:Semester','4'
put 'Students','5','academic:Marks','87'
get 'Students','1'
put 'Students','1','academic:Marks','88'
scan 'Students'
deleteall 'Students','5'
```

## Explanation

The commands above implement the requirements of the practical using the database technology specified in the question.

## Technology Used

- NoSQL Database Systems
- MongoDB / Cassandra / Redis / HBase / Neo4j as applicable

## Result

The required practical operation was successfully defined.
