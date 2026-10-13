LAB SHEET 4 — NoSQL Database Design
Solutions for Q1–Q15

Contents:
- Q1.hbase through Q10.hbase: Apache HBase shell commands
- Q11.cql through Q14.cql: Apache Cassandra CQL commands
- Q15.hbase: Mini-project using HBase for Event Logging
- Q15_Explanation.txt: design notes for Q15

HOW TO RUN
1. Install and start the database service first.
2. HBase files: open the HBase shell with `hbase shell`, then run/paste commands from the corresponding .hbase file. Lines beginning with # are comments.
3. Cassandra files: open `cqlsh`, then run/paste commands from the corresponding .cql file.
4. Q8 uses a short TTL for demonstration; wait for expiration and run the scan again. TTL cleanup can be asynchronous.
5. Q10 creates a table with pre-split regions. Region placement/distribution depends on the cluster and may require multiple RegionServers to observe across servers.
6. Q14 consistency-level demonstrations are meaningful on a multi-node Cassandra cluster. On a single-node setup, ONE/QUORUM/ALL may not demonstrate differences.

These are database-shell solutions, not a complete installation guide. Adapt replication settings and service commands to your local environment.
