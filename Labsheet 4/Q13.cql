-- Q13: Event logging by user and time period
CREATE KEYSPACE IF NOT EXISTS EventDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE EventDB;

-- Partition by user; clustering by timestamp enables time-range queries.
CREATE TABLE IF NOT EXISTS UserEvents (
    user_id text,
    event_time timestamp,
    event_id text,
    event_type text,
    status text,
    PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC, event_id ASC);

INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status)
VALUES ('U101', '2026-10-11T10:15:00Z', 'EVT001', 'LOGIN', 'SUCCESS');
INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status)
VALUES ('U101', '2026-10-11T11:30:00Z', 'EVT002', 'PURCHASE', 'SUCCESS');
INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status)
VALUES ('U101', '2026-10-12T09:00:00Z', 'EVT003', 'LOGOUT', 'SUCCESS');
INSERT INTO UserEvents (user_id, event_time, event_id, event_type, status)
VALUES ('U102', '2026-10-11T12:00:00Z', 'EVT004', 'LOGIN', 'FAILED');

-- All events for one user
SELECT * FROM UserEvents WHERE user_id = 'U101';

-- Events for a user in a time range
SELECT * FROM UserEvents
WHERE user_id = 'U101'
AND event_time >= '2026-10-11T00:00:00Z'
AND event_time < '2026-10-12T00:00:00Z';
