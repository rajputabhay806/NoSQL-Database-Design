// Social network: friends, followers, workplace
CREATE (a:Person {person_id:'P01',name:'Aarav'}),
       (b:Person {person_id:'P02',name:'Diya'}),
       (c:Person {person_id:'P03',name:'Kabir'}),
       (co:Company {name:'TechWorks'}),
       (a)-[:FRIENDS_WITH]->(b),(c)-[:FOLLOWS]->(a),
       (a)-[:WORKS_AT]->(co),(b)-[:WORKS_AT]->(co);
MATCH (:Person {name:'Aarav'})-[:FRIENDS_WITH]-(f:Person) RETURN DISTINCT f.name;
MATCH (f:Person)-[:FOLLOWS]->(:Person {name:'Aarav'}) RETURN f.name;
