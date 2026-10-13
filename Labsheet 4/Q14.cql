-- Q14: Availability and consistency levels
-- Use a multi-node Cassandra cluster for a meaningful comparison.
-- RF=3 assumes at least three nodes in the datacenter.
CREATE KEYSPACE IF NOT EXISTS ConsistencyDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
USE ConsistencyDB;

CREATE TABLE IF NOT EXISTS Demo (
    id text PRIMARY KEY,
    value text
);

-- Run these consistency settings in cqlsh:
CONSISTENCY ONE;
INSERT INTO Demo (id, value) VALUES ('K1', 'written_at_ONE');
SELECT * FROM Demo WHERE id = 'K1';

CONSISTENCY QUORUM;
UPDATE Demo SET value = 'written_at_QUORUM' WHERE id = 'K1';
SELECT * FROM Demo WHERE id = 'K1';

CONSISTENCY ALL;
SELECT * FROM Demo WHERE id = 'K1';
-- With RF=3: ONE needs 1 replica, QUORUM needs 2, ALL needs all 3.
-- ALL can fail if any required replica is unavailable; QUORUM balances
-- consistency and availability. On a single-node cluster, use RF=1 instead,
-- but the comparison will not illustrate multi-replica behavior.
