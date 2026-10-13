import os
from neo4j import GraphDatabase

uri=os.getenv("NEO4J_URI","bolt://localhost:7687")
user=os.getenv("NEO4J_USERNAME","neo4j")
password=os.getenv("NEO4J_PASSWORD")
if not password:
    raise SystemExit("Set NEO4J_PASSWORD before running.")
driver=GraphDatabase.driver(uri,auth=(user,password))
try:
    with driver.session() as s:
        s.execute_write(lambda tx: tx.run(
            "MERGE (p:Person {person_id:$id}) SET p.name=$name,p.city=$city",
            id="P100",name="Aarav",city="Jaipur").consume())
        print(s.run("MATCH (p:Person {person_id:'P100'}) RETURN p").single()["p"])
        s.execute_write(lambda tx: tx.run(
            "MATCH (p:Person {person_id:$id}) SET p.city=$city",
            id="P100",city="Delhi").consume())
        s.run("MERGE (a:Person {person_id:'P100'}) MERGE (b:Person {person_id:'P101'}) ON CREATE SET b.name='Diya' MERGE (a)-[:FRIENDS_WITH]->(b)").consume()
        print([r["name"] for r in s.run("MATCH (:Person {person_id:'P100'})-[:FRIENDS_WITH]-(f:Person) RETURN f.name AS name")])
        s.execute_write(lambda tx: tx.run("MATCH (p:Person {person_id:$id}) DETACH DELETE p",id="P100").consume())
finally:
    driver.close()
