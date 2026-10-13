// Neo4j transaction/consistency demonstration; run statements in Neo4j Browser
CREATE (:DemoItem {id:'D001',value:'initial'});
MATCH (d:DemoItem {id:'D001'}) SET d.value='updated',d.revision=2 RETURN d;
MATCH (d:DemoItem {id:'D001'}) RETURN d;
MATCH (d:DemoItem {id:'D001'}) DELETE d;
// Neo4j transactions commit atomically or roll back on failure. Availability/scaling
// depend on deployment topology, edition, version, and cluster configuration.
